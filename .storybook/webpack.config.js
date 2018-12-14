const path = require('path');

module.exports = (baseConfig, env, config) => {
  // To get tsconfig baseUrl working
  // There is likely a better way to extract the baseUrl from tsconfig.
  config.resolve.modules.push(path.resolve(__dirname, '../src'));
  // To dramatically increase the build speed.
  let rule = config.module.rules.find(rule => {
    const { loader } = rule.use[0];
    return loader && loader.includes('ts-loader');
  });
  rule.use[0].options.transpileOnly = true;
  return config;
};
