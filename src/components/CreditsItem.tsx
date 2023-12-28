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
    <div className="flex flex-col items-center justify-center">
      <CreditsTitle>{title}</CreditsTitle>
      <div className="flex flex-col items-center justify-center mt-24 gap-8">
        {credits[title].map((credit, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <CreditsRole>{credit.role}</CreditsRole>
            {credit.names.length > 20 ? (
              <div className="grid grid-cols-3 gap-x-6 text-center">
                {credit.names.map((name, index) => (
                  <p className="text-base" key={index}>
                    {name}
                  </p>
                ))}
              </div>
            ) : credit.names.length > 5 ? (
              <div className="grid grid-cols-2 gap-x-6 text-center">
                {credit.names.map((name, index) => (
                  <p className="text-base" key={index}>
                    {name}
                  </p>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 text-center">
                {credit.names.map((name, index) => (
                  <p className="text-base" key={index}>
                    {name}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
