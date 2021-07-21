const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      // {
      //   test: /\.(jpg|png)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       name: 'img/[name]_[hash:6].[ext]',
      //       limit: 100 * 1024
      //     }
      //   }
      // }
      {
        test: /\.(jpg|png)$/,
        type: "asset/resource"
      },
    ]
  }
}
