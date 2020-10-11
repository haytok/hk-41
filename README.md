# hk-41

## 概要

- このリポジトリは [ポートフォリオ](https://hk-41.work/) のソースコードです。
- GitHub Pages でデプロイしたポートフォリオは [こちら](dilmnqvovpnmlib.github.io/dilmnqvovpnmlib/) になります。

## 使用した技術

- AWS の `EC2` に `Route53` と `Elastic IP` を使用し、 `Docker` と `docker-compose` を使ってデプロイしています。
- フロントエンドには `React` と `styled-components` を使用して、 `Functional Component` で実装しています。
- ブラウザから修正できるように、バックエンドに `Django Rest Framework` を使って管理画面を作成している途中です。

## 起動

### yarn

- 以下の手順でアプリケーションを起動します

```bash
yarn install
yarn start
```

### docker-compose

#### 開発環境

- 開発環境では、以下の手順でアプリケーションを起動します。フロントエンドのアプリケーションは `localhost:81` でアプリケーションは起動します。

```bash
make dev-build
make dev-up
```

コンテナを落とす時は、以下のコマンドを実行します。

```bash
make dev-down
```

- デプロイする際に build したファイルを push するのを忘れないようにしましょう。

#### 本番環境

- 本番環境では、以下の手順でアプリケーションを起動します。

```bash
make prod-build
make prod-up
```

コンテナを落とす時は、以下のコマンドを実行します。

```bash
make prod-down
```
