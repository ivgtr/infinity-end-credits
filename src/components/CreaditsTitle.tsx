export const CreditsTitle = ({ children }: { children: string }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h2 className="text-5xl font-bold">{children}</h2>
    </div>
  );
};
