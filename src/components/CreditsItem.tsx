import { memo } from "react";
import { CreditsTitle } from "./CreaditsTitle";
import { CreditsRoleItem } from "./CreditsRoleItem";
import type { Credit } from "@/types/credits";

// React.memoで最適化: titleとcredits[title]が変わらない限り再レンダリングしない
export const CreditsItem = memo(({
  title,
  credits,
  onCreditViewed,
  onWorkCompleted,
}: {
  title: string;
  credits: {
    [key: string]: Credit[];
  };
  onCreditViewed: (credit: Credit) => void;
  onWorkCompleted: (workTitle: string) => void;
}) => {
  const workCredits = credits[title];
  const lastIndex = workCredits.length - 1;

  return (
    <div className="flex flex-col items-center justify-center">
      <CreditsTitle>{title}</CreditsTitle>
      <div className="flex flex-col items-center justify-center mt-32 gap-16">
        {workCredits.map((credit, index) => (
          <CreditsRoleItem
            key={credit.id}
            credit={credit}
            isLast={index === lastIndex}
            workTitle={title}
            onViewed={onCreditViewed}
            onWorkCompleted={onWorkCompleted}
          />
        ))}
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // カスタム比較関数: titleとcredits[title]のみを比較
  return prevProps.title === nextProps.title &&
         prevProps.credits[prevProps.title] === nextProps.credits[nextProps.title];
});
