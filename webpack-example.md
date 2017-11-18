**Using webpack to minimize and remove dead code (and unused `vue-ico` icons) in production.**

Install Webpack

`npm install --save-dev webpack`

Install Babel to transpile ES6 Javascript to browser ready code

`npm install --save-dev babel-core babel-loader babel-preset-es2015`

Create your `webpack.config.json`

```JS
const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/path/to/my/entry.js',
  output: {
    path: __dirname + '/path/to/dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // Use this loader on .js files
        exclude: /node_modules\/(?!(vue-ico)\/).*/, // Exclude all node_modules except for vue-ico
        loader: 'babel', // Use Babel (short for ‘babel-loader’) on JS files
        query: {
          presets: [['es2015', { modules: false }]], // Use es2015 plugin to convert code (excluding modules)
          // Note: { modules: false } is required for dead code removal
          plugins: [], // Any additional babel plugins
        }
      }
    ]
  },
  plugins: [] // Any additional webpack plugins
}
```

Dead code will be removed when running webpack in production

`webpack -p`

Further Reading:
https://medium.freecodecamp.org/tree-shaking-es6-modules-in-webpack-2-1add6672f31b
