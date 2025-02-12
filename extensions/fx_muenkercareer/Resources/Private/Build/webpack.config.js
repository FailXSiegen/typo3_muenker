// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: false,
    module: {
        generator: {

        },
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|Vendor)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'resolve-url-loader', 
                        options: { 
                            sourceMap: false 
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                type: "asset/inline",
                resourceQuery: /inline/,
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'Images'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'Fonts/'
                        }
                    }
                ]
            }
        ],
    },
    externals: {
        "jquery": "jQuery",
        "$": "jQuery"
    },
    plugins: [
        require('autoprefixer'),
        require('cssnano'),
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'StyleSheet/[name].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './../../Public/Vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
                    to: 'JavaScript/'
                },
                {
                    from: './node_modules/@fontsource/shantell-sans/files',
                    to: 'Fonts',
                    globOptions: {
                        ignore: ['**/*.css']
                    }
                }
            ]
        })
    ],
    entry: {  
        'bootstrap' : './src/scss/bootstrap.scss',
        'fonts' : './src/scss/fonts.scss',
        'career': './src/scss/career.scss',
        'rte': './src/scss/rte.scss',
    },
    output: {
        path: path.resolve(__dirname, '../../Public/'),
        publicPath: '',
        filename: 'JavaScript/[name].js'
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};