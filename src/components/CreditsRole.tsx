export const CreditsRole = ({
  children,
  className = ""
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3
        className={`text-base font-semibold ${className}`}
        style={{
          textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)"
        }}
      >
        {children}
      </h3>
    </div>
  );
};
