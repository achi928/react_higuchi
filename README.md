# 顧客管理システム

シンプルでユーザーフレンドリーな顧客管理システムのフロントエンド実装です。このアプリケーションは、ログイン機能と顧客情報の管理機能を提供します。

## 目次

- [機能概要](#機能概要)
- [セットアップ手順](#セットアップ手順)
- [使用した技術・ライブラリ](#使用した技術ライブラリ)
- [実装した機能の説明](#実装した機能の説明)
- [動作確認方法](#動作確認方法)
- [フォルダ構成](#フォルダ構成)
- [今後の改善点](#今後の改善点)

## 機能概要

このアプリケーションは以下の主要機能を提供します：

- シンプルなログイン画面
- 顧客情報の一覧表示
- 顧客情報の検索機能
- 顧客データの並び替え機能

## セットアップ手順

以下の手順でアプリケーションをローカル環境で実行できます。

### 前提条件

- Node.js
- npm

### インストール

1. Reactプロジェクトを作成したいディレクトリで以下コマンドを実行します。

```bash
npm create vite@latest
```

２. コマンド実行すると、いくつか質問されるので回答します。
プロジェクト名を入力します。

```bash
? Project name: › music_app
```

３. フレームワークや言語を選択します。

```bash
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Angular
    Others
Select a variant: › - Use arrow-keys. Return to submit.
    TypeScript
    TypeScript + SWC
❯   JavaScript
    JavaScript + SWC
    Remix ↗
```

４. 上記でReactプロジェクトのフォルダー作成されました。
以下のような表示が出る想定です。上記のコマンドを実行するとセットアップ完了します。

```bash
Done. Now run:
    cd music_app
    npm install
    npm run dev
```

## 使用した技術・ライブラリ

- **フレームワーク**: React (npm create vite@latest)
- **UI ライブラリ**: Material-UI
- **フォーム管理**: React Hook Form
- **開発ツール**: Vscode

## 実装した機能の説明

### 1. ログイン機能

- ユーザーID・パスワード入力フォーム
- 入力バリデーション（空欄チェック）
- エラーメッセージ表示

### 2. 顧客一覧画面

- 顧客情報の表形式での表示
  - 顧客名
  - メールアドレス
  - 電話番号
  - 登録日
- **検索機能**
  - 顧客名、電話番号、メールアドレスによる絞り込み検索
  - リアルタイム検索結果表示
- **並び替え機能**
  - 名前順（昇順・降順）
  - 登録日順（昇順・降順）

### 3. デザイン

- Material-UIを使用した一貫性のあるデザイン

## 動作確認方法

### ログイン画面

1. アプリケーションを起動すると、最初にログイン画面が表示されます
2. 情報入力でログインできます：
3. 入力欄を空にしてログインボタンを押すと、エラーメッセージが表示されます

### 顧客一覧画面

1. ログイン後、自動的に顧客一覧画面に遷移します
2. 画面上部の検索バーに顧客名、電話番号、メールアドレスを入力して、検索できます
3. カラムヘッダーをクリックすると、そのカラムでデータを並び替えることができます

## フォルダ構成

```
src/
├── pages/
│   ├── Login/         # ログイン関連コンポーネント
│   ├── CustomerList/  # 顧客一覧関連コンポーネント
├── testdate/
│   ├── mockDate/      # 顧客テストデータ
└── App.js             # アプリケーションのルート
```

## 今後の改善点

- 顧客詳細画面の実装
- 画面の中央寄せ
- 顧客データの追加・編集・削除機能
- バックエンドとの連携（API実装）
- ユニットテストの追加
