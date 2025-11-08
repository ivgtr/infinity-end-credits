interface StartScreenProps {
  onStart: (withMusic: boolean) => void;
}

/**
 * エンドクレジット開始前の選択画面
 * BGMありまたはミュートでの開始を選択
 */
export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* タイトル - 左上に目立たずに配置 */}
      <div className="absolute top-6 left-6 text-white/40 text-sm">
        無限エンドクレジット
      </div>

      {/* 中央のアイコンボタン */}
      <div className="flex gap-16">
        {/* BGMありボタン */}
        <button
          onClick={() => onStart(true)}
          className="flex flex-col items-center gap-4 p-6 transition-all group"
          aria-label="BGMありで開始"
        >
          <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center text-white/60 group-hover:border-white/80 group-hover:text-white/90 group-hover:scale-105 transition-all">
            <div className="w-8 h-8">
              <VolumeIcon />
            </div>
          </div>
          <span className="text-white/30 text-xs">※BGMが再生されます</span>
        </button>

        {/* ミュートボタン */}
        <button
          onClick={() => onStart(false)}
          className="flex flex-col items-center gap-4 p-6 transition-all group"
          aria-label="ミュートで開始"
        >
          <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center text-white/60 group-hover:border-white/80 group-hover:text-white/90 group-hover:scale-105 transition-all">
            <div className="w-8 h-8">
              <MuteIcon />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

/**
 * 音量アイコン
 */
function VolumeIcon() {
  return (
    <svg
      className="w-full h-full"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  );
}

/**
 * ミュートアイコン
 */
function MuteIcon() {
  return (
    <svg
      className="w-full h-full"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
  );
}
