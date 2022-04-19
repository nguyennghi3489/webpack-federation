const HtmlWebpackPlugin =  require('html-webpack-plugin')
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer:{
    port:8081
  },
  plugins:[
    new ModuleFederation({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex":"./src/index"
      },
      shared:['@faker-js/faker']
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}