import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={`flex min-h-screen h-full flex-col items-center justify-between ${notoSansJP.className}`}>
        {children}
      </main>
    </>
  );
}
