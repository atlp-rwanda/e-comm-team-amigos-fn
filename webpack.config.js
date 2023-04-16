const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        assetModuleFilename: "assets/img/[hash][ext][query]"
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            favicon:"./src/assets/img/logo.png",
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            { 
                test: /\.css$/i,                
                use: [                  {                    
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: "" },
                },                  
                "css-loader",                                                  
                ],              
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env',{ targets: "defaults" }], ['@babel/preset-react',{runtime:"automatic"}]]
                        }
                }
            },
            {                
                test: /\.(png|jpe?g|gif|svg)$/i,
              
                type: "asset",                                     
              },
        ]
    },
    devServer: {
        hot: true,
        port: 3000,
        open:true,
        historyApiFallback: true, 
        historyApiFallback: {
          disableDotRule: true
        },
    }
}
