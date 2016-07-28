const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    debug: true,
    //devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: "babel?presets[]=react&presets[]=es2015"
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Quick Diff',
        template: path.join('src', 'index.ejs')
    })]
};
