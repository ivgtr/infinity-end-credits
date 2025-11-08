import { useEffect, useRef, useState, useCallback } from "react";
import { CreditsRole } from "./CreditsRole";
import type { Credit, EasterEggType } from "@/types/credits";
import { playEasterEggSound } from "@/utils/sound";

interface CreditsRoleItemProps {
  credit: Credit;
  isLast: boolean;
  workTitle: string;
  onViewed: (credit: Credit) => void;
  onWorkCompleted: (workTitle: string) => void;
  onEasterEggClick?: (type: EasterEggType, creditId: number) => void;
}

// イースターエッグのスタイルを取得
const getEasterEggStyle = (easterEgg?: EasterEggType) => {
  if (!easterEgg) return "";

  switch (easterEgg) {
    case "famous_director":
      return "text-yellow-400 font-bold animate-shimmer";
    case "funny_role":
      return "text-pink-400 animate-bounce-subtle";
    case "same_name":
      return "text-red-400 animate-glitch";
    default:
      return "";
  }
};

// テキストグローのスタイル定義
const textGlowStyle = {
  textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)"
};

// 協力会社セクションかどうかを判定
const isCooperationRole = (roleName: string) => {
  return roleName.includes("協力") || roleName === "製作" || roleName === "制作協力";
};

// 会社名とスタッフ名を分離してレンダリング
const renderCooperationSection = (names: string[]) => {
  const groups: { company: string; staff: string[] }[] = [];
  let currentGroup: { company: string; staff: string[] } | null = null;

  names.forEach((name) => {
    if (name.startsWith("　")) {
      // スタッフ名（全角スペースで始まる）
      if (currentGroup) {
        currentGroup.staff.push(name.trim());
      }
    } else {
      // 会社名
      if (currentGroup) {
        groups.push(currentGroup);
      }
      currentGroup = { company: name, staff: [] };
    }
  });

  if (currentGroup) {
    groups.push(currentGroup);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className="flex flex-col items-center justify-center gap-3">
          <p className="text-lg font-semibold" style={textGlowStyle}>{group.company}</p>
          <div className="flex flex-col items-center justify-center gap-1.5">
            {group.staff.map((staff, staffIndex) => (
              <p className="text-sm" key={staffIndex} style={textGlowStyle}>
                {staff}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const CreditsRoleItem = ({
  credit,
  isLast,
  workTitle,
  onViewed,
  onWorkCompleted,
  onEasterEggClick,
}: CreditsRoleItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasBeenViewedRef = useRef(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showClickEffect, setShowClickEffect] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Intersection Observerを設定
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 要素が画面に表示されたとき（50%以上表示）
          if (entry.isIntersecting && !hasBeenViewedRef.current) {
            hasBeenViewedRef.current = true;
            onViewed(credit);

            // 最後のクレジットの場合、作品完了を通知
            if (isLast) {
              onWorkCompleted(workTitle);
            }
          }
        });
      },
      {
        threshold: 0.5, // 50%表示されたらカウント
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [credit, isLast, workTitle, onViewed, onWorkCompleted]);

  // イースターエッグのクリックハンドラー
  const handleEasterEggClick = useCallback(() => {
    if (!credit.easterEgg || isClicked) return;

    setIsClicked(true);
    setShowClickEffect(true);

    // 効果音を再生
    playEasterEggSound(credit.easterEgg);

    // コールバックを実行
    if (onEasterEggClick) {
      onEasterEggClick(credit.easterEgg, credit.id);
    }

    // クリックエフェクトを800ms後に非表示
    setTimeout(() => {
      setShowClickEffect(false);
    }, 800);
  }, [credit.easterEgg, credit.id, isClicked, onEasterEggClick]);

  const easterEggStyle = getEasterEggStyle(credit.easterEgg);

  // イースターエッグのラッパースタイル
  const wrapperClassName = credit.easterEgg
    ? `relative ${isClicked ? "opacity-60" : ""} ${showClickEffect ? "animate-click-pulse" : ""}`
    : "";

  const clickableStyle = credit.easterEgg && !isClicked
    ? "cursor-pointer hover:scale-105 transition-transform duration-200"
    : "";

  return (
    <div ref={ref} className="flex flex-col items-center justify-center w-full">
      {/* クリックエフェクト（スパークル） */}
      {showClickEffect && credit.easterEgg && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white opacity-30 animate-sparkle" />
        </div>
      )}

      <div
        className={`${wrapperClassName} ${clickableStyle}`}
        onClick={credit.easterEgg && !isClicked ? handleEasterEggClick : undefined}
      >
        <CreditsRole className={credit.easterEgg ? easterEggStyle : ""}>{credit.role}</CreditsRole>

      {isCooperationRole(credit.role) ? (
        // 協力会社セクション：会社名とスタッフを縦1列で表示
        <div className="mt-6">
          {renderCooperationSection(credit.names)}
        </div>
      ) : credit.names.length > 40 ? (
        // 超大規模スタッフ（40人以上）：2列表示でより縦長に
        <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-center mt-6">
          {credit.names.map((name, nameIndex) => (
            <p className={`text-base ${easterEggStyle}`} key={nameIndex} style={textGlowStyle}>
              {name}
            </p>
          ))}
        </div>
      ) : credit.names.length > 15 ? (
        // 大規模スタッフ（15-40人）：2列表示
        <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-center mt-6">
          {credit.names.map((name, nameIndex) => (
            <p className={`text-base ${easterEggStyle}`} key={nameIndex} style={textGlowStyle}>
              {name}
            </p>
          ))}
        </div>
      ) : credit.names.length > 5 ? (
        // 中規模スタッフ（6-15人）：1列表示
        <div className="flex flex-col items-center justify-center gap-2.5 mt-6">
          {credit.names.map((name, nameIndex) => (
            <p className={`text-base ${easterEggStyle}`} key={nameIndex} style={textGlowStyle}>
              {name}
            </p>
          ))}
        </div>
      ) : (
        // 小規模スタッフ（5人以下）：1列表示
        <div className="flex flex-col items-center justify-center gap-3 mt-6">
          {credit.names.map((name, nameIndex) => (
            <p className={`text-base ${easterEggStyle}`} key={nameIndex} style={textGlowStyle}>
              {name}
            </p>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};
