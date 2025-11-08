export const CreditsRole = ({
  children,
  className = ""
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className={`text-base font-semibold ${className}`}>{children}</h3>
    </div>
  );
};
