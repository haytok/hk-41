# hk-41

## 概要

- このリポジトリはポートフォリオのソースコードです。

## 起動

### yarn

- 以下の手順でアプリケーションを起動します

```bash
yarn start
```

### docker-compose

#### 開発環境

- 開発環境では、以下の手順でアプリケーションを起動します。

```bash
make dev-build
make dev-up
```

コンテナを落とす時は、以下のコマンドを実行します。

```bash
make dev-down
```

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
