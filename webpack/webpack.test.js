'use strict';

module.exports = {
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.(css|scss|html)$/,
                use: 'null-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};