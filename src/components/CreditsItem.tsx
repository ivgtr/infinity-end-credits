import { CreditsTitle } from "./CreaditsTitle";
import { CreditsRole } from "./CreditsRole";

export const CreditsItem = ({
  title,
  credits,
}: {
  title: string;
  credits: {
    [key: string]: {
      role: string;
      names: string[];
    }[];
  };
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <CreditsTitle>{title}</CreditsTitle>
      <div className="flex flex-col items-center justify-center mt-24 gap-8">
        {credits[title].map((credit, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <CreditsRole>{credit.role}</CreditsRole>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {credit.names.map((name, index) => (
                <p key={index}>{name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
