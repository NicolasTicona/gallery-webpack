const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

    entry: {
        home: path.resolve(__dirname, 'src/js/main.js')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist')+"/",
        filename: 'js/[name].js'    
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 1000000,
                        name: '[hash].[ext]'
                    }
                }
            }
        ]
    },

    plugins: [
        new extractTextPlugin('css/[name].css')
    ]

}
