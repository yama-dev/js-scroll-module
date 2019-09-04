const pkg = require('./package.json');

const comment = `JS SCROLL MODULE (JavaScript Library)
  ${pkg.name}
Version ${pkg.version}
Repository ${pkg.repository.url}
Copyright ${pkg.author}
Licensed ${pkg.license}`;

const env = process.env.NODE_ENV;

const webpack = require('webpack');

const webpackPlugEnv = new webpack.EnvironmentPlugin({
  NODE_ENV: env,
  VERSION: pkg.version,
  DEBUG: false
});

const webpackPlugBnr = new webpack.BannerPlugin({
  banner: comment,
});

const babelPlugin = [
  '@babel/plugin-transform-object-assign'
];

const config = {
  mode: env || 'development',
  entry: ['./src/js-scroll-module.js'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'js-scroll-module.js',
    library: 'SCROLL_MODULE',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules[//\/](?!(@yama\-dev)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false
                }
              ]
            ],
            plugins: babelPlugin
          }
        }
      }
    ]
  },
  plugins: [
    webpackPlugEnv,
    webpackPlugBnr
  ]
};

module.exports = config;
