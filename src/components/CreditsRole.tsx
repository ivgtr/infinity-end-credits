export const CreditsRole = ({ children }: { children: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-4xl font-bold">{children}</h3>
    </div>
  );
};
