const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@audio': path.resolve(__dirname, 'audio/'),
      '@img' :path.resolve(__dirname,'img/')
    }
  }
};