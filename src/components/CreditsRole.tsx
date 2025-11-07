export const CreditsRole = ({ children }: { children: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-base font-semibold">{children}</h3>
    </div>
  );
};
