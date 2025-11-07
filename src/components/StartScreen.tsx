interface StartScreenProps {
  onStart: (withMusic: boolean) => void;
}

/**
 * エンドロール開始前の選択画面
 * BGMありまたはミュートでの開始を選択
 */
export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          無限エンドロール
        </h1>

        <div className="flex flex-col gap-4 w-80">
          <button
            onClick={() => onStart(true)}
            className="px-8 py-4 bg-white text-black rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors"
          >
            BGMありで開始
          </button>

          <button
            onClick={() => onStart(false)}
            className="px-8 py-4 bg-gray-800 text-white rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors border border-gray-600"
          >
            ミュートで開始
          </button>
        </div>

        <p className="text-gray-400 text-sm mt-4">
          ※再生中にいつでも音声のON/OFFを切り替えられます
        </p>
      </div>
    </div>
  );
}
