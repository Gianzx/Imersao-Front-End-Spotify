module.exports = function override(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: false,
    };
    return config;
  };