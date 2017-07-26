var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
 entry: './src/index.ts',
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       use: 'ts-loader',
       enforce: "pre",
       exclude: /node_modules/
     },
      {
    test: /\.scss$/,
    loader: ["style-loader","css-loader?sourceMap","sass-loader?sourceMap"]
}
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 output: {
   filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist')
 },
    devServer: {
     contentBase: './dist'
   },
};