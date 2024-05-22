const reactConfig = require('./react')

module.exports = {
  ...reactConfig,
  extends: [...reactConfig.extends, 'plugin:@next/next/core-web-vitals'],
  rules: {
    ...reactConfig.rules
  }
}
