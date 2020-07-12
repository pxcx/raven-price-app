const path = require('path');

module.exports = {
  webpack: {
    alias: {
      resources: path.resolve(__dirname, 'src/resources'),
      components: path.resolve(__dirname, 'src/components'),
      store: path.resolve(__dirname, 'src/store')
    }
  }
}