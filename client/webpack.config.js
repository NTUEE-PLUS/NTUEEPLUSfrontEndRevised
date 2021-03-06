const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src/pages/', 'index.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js',
    },
    //=============== webpack server (currently not use)=================
    // devServer:{
    //   contentBase: path.resolve(__dirname,'dist'),
    //   open:true,
    //   clientLogLevel: 'silent',
    //   port: 9000,
    // },
    //===================================================================
    //=============== html template plugin (currently not use) ==========
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages/index.html'),
        }),
    ],
    //===================================================================
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src/pages/'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: 'defaults',
                                    },
                                ],
                                '@babel/preset-react',
                            ],
                            // plugins: ["react-hot-loader/babel"]
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
        ],
    },
}
