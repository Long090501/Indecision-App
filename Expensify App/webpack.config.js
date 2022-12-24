const path = require('path')

module.exports = (env) => {
    const isProduction = env === 'production'
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname,'public'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        mode: 'development',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }],
        },
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            liveReload: true,
            historyApiFallback: true,
        }
    }
}