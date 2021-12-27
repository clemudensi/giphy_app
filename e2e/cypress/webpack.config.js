module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                // https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/preprocessors__typescript-webpack/webpack.config.js
                // every time webpack sees a TS file (except for node_modules)
                // webpack will use "ts-loader" to transpile it to JavaScript
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/typescript'],
                        },
                    },
                ],
            },
        ],
    },
};
