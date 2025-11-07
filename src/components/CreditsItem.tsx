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
            <p className="text-lg font-semibold">{group.company}</p>
            <div className="flex flex-col items-center justify-center gap-1.5">
              {group.staff.map((staff, staffIndex) => (
                <p className="text-sm" key={staffIndex}>
                  {staff}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <CreditsTitle>{title}</CreditsTitle>
      <div className="flex flex-col items-center justify-center mt-32 gap-16">
        {credits[title].map((credit, index) => (
          <div key={index} className="flex flex-col items-center justify-center w-full">
            <CreditsRole>{credit.role}</CreditsRole>

            {isCooperationRole(credit.role) ? (
              // 協力会社セクション：会社名とスタッフを縦1列で表示
              <div className="mt-6">
                {renderCooperationSection(credit.names)}
              </div>
            ) : credit.names.length > 40 ? (
              // 超大規模スタッフ（40人以上）：2列表示でより縦長に
              <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-center mt-6">
                {credit.names.map((name, nameIndex) => (
                  <p className="text-base" key={nameIndex}>
                    {name}
                  </p>
                ))}
              </div>
            ) : credit.names.length > 15 ? (
              // 大規模スタッフ（15-40人）：2列表示
              <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-center mt-6">
                {credit.names.map((name, nameIndex) => (
                  <p className="text-base" key={nameIndex}>
                    {name}
                  </p>
                ))}
              </div>
            ) : credit.names.length > 5 ? (
              // 中規模スタッフ（6-15人）：1列表示
              <div className="flex flex-col items-center justify-center gap-2.5 mt-6">
                {credit.names.map((name, nameIndex) => (
                  <p className="text-base" key={nameIndex}>
                    {name}
                  </p>
                ))}
              </div>
            ) : (
              // 小規模スタッフ（5人以下）：1列表示
              <div className="flex flex-col items-center justify-center gap-3 mt-6">
                {credit.names.map((name, nameIndex) => (
                  <p className="text-base" key={nameIndex}>
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
