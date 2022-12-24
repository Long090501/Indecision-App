const config = {
    setupFiles: ["raf/polyfill", "<rootDir>/src/test/setupTests.js"],
    snapshotSerializers: ["enzyme-to-json/serializer"]
  };
  
  module.exports = config;