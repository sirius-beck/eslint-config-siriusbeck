const reactConfig = require('./react')

module.exports = {
  ...reactConfig,
  env: {
    node: true,
    ...reactConfig.env
  },
  extends: [...reactConfig.extends, 'next/core-web-vitals'],
  rules: {
    ...reactConfig.rules
  }
}
