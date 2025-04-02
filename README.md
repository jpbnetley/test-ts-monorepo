# Test mono repo setup

## The goal is to test the following

- [X] when running main app, should automatically compile lib repos
- [ ] should share an eslint config from parent repo
- [ ] share test config from parent repo
- [X] share tsconfig from parent repo

## Running the project

- Install packages: 
```sh
pnpm i
```

### Run dev mode
- Start app 
```sh
pnpm run turbo:app-cli:dev
```
- Start react
```sh
pnpm run turbo:app-react:dev
```

### Run production mode
- Start all 
```sh
pnpm run turbo:start
```

## Testing bundlers
- swc: App
- esbuild: packages/web
- webpack: packages/node
- vite: packages/common