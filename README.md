# Test mono repo setup

## The goal is to test the following

- [x] when running main app, should automatically compile lib repos
- [x] share tsconfig from parent repo

## Running the project

- install vite plus:
  [instructions](https://viteplus.dev/guide/#getting-started)
- Install packages:

```sh
vp i
```

### Run dev mode

- Start app

```sh
vp run vp:app-cli:dev
```

- Start react

```sh
vp run vp:app-react:dev
```

### Run production mode

- Start all

```sh
vp run vp:start
```

## Testing bundlers

- swc: App
- esbuild: packages/web
- webpack: packages/node
- vite: packages/common
