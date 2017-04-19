var path = require('path');
module.exports = {
    entry: "./js/app.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.(jpe?g|gif|png|svg|JPG|jpg)$/,
            loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
        }]
    }
};
