# Test mono repo setup

## The goal is to test the following

- [X] when running main app, should automatically compile lib repos
- [ ] should share an eslint config from parent repo
- [ ] share test config from parent repo
- [X] share tsconfig from parent repo

## Running the project

- Install packages: 
```sh
npm i
```

### Run dev mode
- Start app 
```sh
npm run app:dev
```

### Run production mode
- Start app 
```sh
npm run app:start
```

## Testing bundlers
- swc: App
- esbuild: packages/web
- tsc: packages/node
- vite: packages/common