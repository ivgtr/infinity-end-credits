type EVANGELIONRole =
  | "企画・原作・脚本"
  | "画コンテ"
  | "画コンテ案・イメージボード"
  | "総作画監督"
  | "作画監督"
  | "メカ作画監督"
  | "メカ作画監督補佐"
  | "アヴァン総作画監督"
  | "副監督"
  | "主・メカニックデザイン"
  | "コンセプトアートディレクター"
  | "キャラクターデザイン原案"
  | "キャラクターデザイン"
  | "メカニックデザイン"
  | "美術設定"
  | "原画"
  | "第二原画"
  | "デジタル作画修正"
  | "動画検査"
  | "動画"
  | "色彩設計"
  | "色指定検査"
  | "仕上げ検査補佐"
  | "仕上げ管理"
  | "仕上げ"
  | "仕上げ協力"
  | "特殊効果/ブラシワーク"
  | "美術監督"
  | "美術"
  | "背景"
  | "美術2Dワークス"
  | "美術制作管理"
  | "美術制作コーディネーター"
  | "美術制作協力"
  | "CGI/VFX"
  | "CGIアートディレクター"
  | "2DCGIディレクター"
  | "2DCGI・モーショングラフィックスデザイナー"
  | "モーショングラフィックスデザイナー"
  | "ビジュアルデベロップメント"
  | "CGI監督"
  | "CGIアニメーションディレクター"
  | "CGIモデリングディレクター"
  | "CGIテクニカルディレクター"
  | "CGIルックデヴディレクター"
  | "CGIリードアニメーター"
  | "CGIアニメーター"
  | "CGIリードモデラー"
  | "CGIモデラー"
  | "リードテクニカルアーティスト"
  | "テクニカルアーティスト"
  | "レンダリングアーティスト"
  | "CGIディベロップメント"
  | "プロダクションマネージャー"
  | "撮影監督"
  | "副撮影監督"
  | "撮影監督補佐"
  | "撮影"
  | "特技監督"
  | "特殊技術撮影"
  | "撮影管理"
  | "特技開発"
  | "コンポジットテクニカルアーティスト"
  | "セル画アナログ撮影"
  | "ラインテスト"
  | "名誉特技監督"
  | "編集"
  | "編集助手"
  | "声ノ出演"
  | "音楽"
  | "音響制作"
  | "音響効果"
  | "録音"
  | "台詞演出"
  | "台詞演出助手"
  | "音響効果助手"
  | "音響制作"
  | "音響制作・担当"
  | "台詞録音スタジオ"
  | "ダビングステージ"
  | "スタジオエンジニア"
  | "テクニカルサポート"
  | "制作"
  | "制作統括プロデューサー"
  | "アニメーションプロデューサー"
  | "設定制作"
  | "制作進行"
  | "リテイク管理"
  | "プリヴィズ制作"
  | "制作進行補佐"
  | "スタジオマネジメント"
  | "コーポレートマネジメント"
  | "システムマネジメント"
  | "社長室マネジメント"
  | "車両協力"
  | "制作協力"
  | "機材協力"
  | "画面協力"
  | "音響協力"
  | "アーカイブ協力"
  | "取材・考証協力"
  | "ロケーション協力"
  | "協力"
  | "製作"
  | "エグゼクティブ・プロデューサー"
  | "監督"
  | "総監督";

export type Role = EVANGELIONRole;

export type RoleStructure = {
  required: boolean;
  max: number;
  index: number;
};

export type Roles = {
  [key in Role]: RoleStructure;
};
