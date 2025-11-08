export const Letterbox = () => {
  return (
    <>
      {/* 上部の黒帯 */}
      <div
        className="fixed top-0 left-0 w-full bg-black pointer-events-none"
        style={{
          height: "8vh",
          zIndex: 15,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
        }}
      />

      {/* 下部の黒帯 */}
      <div
        className="fixed bottom-0 left-0 w-full bg-black pointer-events-none"
        style={{
          height: "8vh",
          zIndex: 15,
          boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.8)",
        }}
      />
    </>
  );
};
