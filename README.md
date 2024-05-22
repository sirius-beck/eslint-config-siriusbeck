# Sirius Beck - ESLint Config

## Installation

Install the package and its peer dependencies with `npm` or your favorite package manager as dev dependencies:

```bash
npm install -D eslint@^8 prettier @siriusbeck/eslint-config
```

## How to use

### Eslint

Inside the `.eslintrc` file, extend `@siriusbeck/eslint-config`:

#### Basic

```json
{
  "extends": "@siriusbeck/eslint-config"
}
```

#### React

```json
{
  "extends": "@siriusbeck/eslint-config/react"
}
```

#### Next

```json
{
  "extends": "@siriusbeck/eslint-config/next"
}
```

### Prettier

#### Default settings

Add `@siriusbeck/eslint-config/prettier` to your `package.json` file:

```json
{
  "prettier": "@siriusbeck/eslint-config/prettier"
}
```

Or create a prettier configuration file in the project root:

```javascript
// .prettierrc.js

module.exports = require('@siriusbeck/eslint-config/prettier')
```

#### Editing the default settings

Create a prettier configuration file in the root of the project and add the code below:

```javascript
// .prettierrc.js

const defaultConfig = require('@siriusbeck/eslint-config/prettier')

/** @type {import('prettier').Config} */
module.exports = {
  ...defaultConfig
  // Add your custom config here
}
```

#### Custom settings

Just create a prettier configuration file at the root of the project.

## What's included?

- Standard config
- TypeScript (optional)
- Prettier
- React plugin + config
- React Hooks - plugin
- JSX a11y - plugin
- Import plugin
- Import Helpers plugin
- NextJs
