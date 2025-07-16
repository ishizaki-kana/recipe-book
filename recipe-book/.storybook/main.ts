import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    "../**/*.mdx",
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)",     // .stories.* のファイルを読み込む
  ],
  "addons": [
    "@storybook/addon-essentials",    // 基本セット
    "@storybook/addon-interactions",   // テスト用の操作を追加
    "@storybook/controls",    // コンポーネントの属性を操作し、リアルタイムに変化を確認する
    "@storybook/addon-docs",    // ドキュメントを自動生成
    "@storybook/viewport",    // レスポンシブ対応
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  "core": {
    disableTelemetry: true  // 匿名データ送信を停止
  }
} as StorybookConfig;
export default config;