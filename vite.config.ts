import { defineConfig } from 'vite-plus';

export default defineConfig({
  run: {
    tasks: {
      'vp:build:packages': {
        command: 'vp run --filter=./packages/* build',
        cache: false
      },
      'vp:check:types': {
        command: 'vp run -r check:types'
      },
      'vp:build': {
        command: 'vp run -r build'
      },
      'vp:start': {
        command: 'vp run -r start',
        dependsOn: [
          '@test-ts-monorepo/web#build',
          '@test-ts-monorepo/node#build',
          '@test-ts-monorepo/common#build'
        ]
      },
      'vp:dev': {
        command: 'vp run -r dev',
        dependsOn: [
          '@test-ts-monorepo/web#build',
          '@test-ts-monorepo/node#build',
          '@test-ts-monorepo/common#build'
        ],
        cache: false
      },
      'vp:app-cli:dev': {
        command: 'vp run -r app-cli:dev',
        cache: false
      },
      'vp:app-react:dev': {
        command: 'vp run dev --filter=app-react',
        cache: false
      }
    }
  },
  fmt: {
    singleQuote: true,
    arrowParens: 'avoid',
    ignorePatterns: ['**/dist/**', '**/node_modules/**'],
    trailingComma: 'none'
  },
  lint: { options: { typeAware: true, typeCheck: true } }
});
