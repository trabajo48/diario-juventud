const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',

    target: 'node',

    entry: {

    },

    output: {

    },

    externals: [nodeExternals()],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                loader: 'babel-loader',
            },
        ],
    },

    plugins: [
        
    ]
}