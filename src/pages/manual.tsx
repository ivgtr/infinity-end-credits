import Head from "next/head";
import { ManualCreditsCanvas } from "@/components/ManualCreaditsCanvas";

export default function Home() {
  return (
    <>
      <Head>
        <title>無限エンドロール・手動</title>
      </Head>

      <ManualCreditsCanvas />
    </>
  );
}
