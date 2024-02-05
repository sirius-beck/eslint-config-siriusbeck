# Sirius Beck ESLint Config

- [Sirius Beck ESLint Config](#sirius-beck-eslint-config)
  - [Installation](#installation)
  - [How to use](#how-to-use)
  - [What's included?](#whats-included)

## Installation

```bash
npm install -D eslint @siriusbeck/eslint-config
```

## How to use

Inside the `.eslintrc` file, add `"@siriusbeck/eslint-config"` for basic coconfiguration:

```json
{
  "extends": "@siriusbeck/eslint-config"
}
```

Configuration for other frameworks:

```json
{
  // node | react | next
  "extends": "@siriusbeck/eslint-config/node"
}
```

## What's included?

- Standars config
- React plugin + config
- React Hooks - plugin
- JSX a11y - plugin
- Import plugin
- Import Helpers plugin
- Prettier
- TypeScript (opcional)
