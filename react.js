const baseConfig = require('.')

module.exports = {
  ...baseConfig,
  env: {
    browser: true,
    ...baseConfig.env
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', ...baseConfig.extends],
  plugins: ['react', 'jsx-a11y', ...baseConfig.plugins],
  rules: {
    'react/no-unknown-property': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image']
      }
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    ...baseConfig.rules
  },
  settings: {
    react: {
      version: 'detect'
    },
    ...baseConfig.settings
  }
}
