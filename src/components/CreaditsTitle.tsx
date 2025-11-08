export const CreditsTitle = ({ children }: { children: string }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h2
        className="text-5xl font-bold"
        style={{
          textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)"
        }}
      >
        {children}
      </h2>
    </div>
  );
};
