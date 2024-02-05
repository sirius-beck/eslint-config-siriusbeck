const baseConfig = require('.')

module.exports = {
  ...baseConfig,
  env: {
    ...baseConfig.env,
    node: true
  }
}
