const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin')
module.exports ={
  mode:"development",
  devServer:{
    port: 8003
  },
  plugins:[
    new HtmlWebpackPlugin({template:'./public/index.html'}),
    new ModuleFederation({
      name:"cart",
      filename: "remoteEntry.js",
      exposes:{
        "./CartShow": './src/index'
      },
      shared:['@faker-js/faker']
    })
  ]

}