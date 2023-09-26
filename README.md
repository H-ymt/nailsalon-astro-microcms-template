# 🚀 ネイルサロンのホームページ

AstroとmicroCMSを使用したシンプルなネイルサロンのホームページテンプレートです。

## 🏃 動作環境

Node.js 18以上

## 🔑 環境変数の設定

ルート直下に`.env.local`ファイルを作成し、下記の情報を入力してください。

```
MICROCMS_API_KEY=xxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=xxxxxxxxxx
BASE_URL=xxxxxxxxxx
```

`MICROCMS_API_KEY`
microCMS 管理画面の「サービス設定 > API キー」から確認することができます。

`MICROCMS_SERVICE_DOMAIN`
microCMS 管理画面の URL（https://xxxxxxxx.microcms.io）の xxxxxxxx の部分です。

## ⚒️ 開発の仕方

All commands are run from the root of the project, from a terminal:

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | パッケージのインストール                 |
| `npm run dev`     | 開発環境の起動 `localhost:4321`          |
| `npm run build`   | プロジェクトをビルドする                 |
| `npm run preview` | ビルドしたものをローカルでプレビューする |

## 🌏 Vercel へのデプロイ

[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)から簡単にデプロイが可能です。

リポジトリを紐付け、環境変数を `Environment Variables` に登録後、デプロイします。

![](public/vercel-deploy.webp)

## 👀 Images used

画像は下記のサイトより使用しました。

- [Pexels](https://www.pexels.com/ja-jp/)
