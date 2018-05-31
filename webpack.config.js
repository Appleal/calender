const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
module.exports = {
    entry: "./www/app/app.js",
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "all.js",
        publicPath: "/dist/"
    },
    mode: "development",
    watch: true,
    module: {
        rules: [{
            test: /\.jsx?$/g,
            include: [
                path.resolve(__dirname, "www/app/app")
            ],
            exclude: [
                path.resolve(__dirname, "node-modules")
            ]

        }, {
            test: /\.less$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.vue$/,
            include: [
                path.resolve(__dirname, "www/app")
            ],
            exclude: [
                path.resolve(__dirname, "node-modules")],
            loader: "vue-loader"

        }]
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};
// const path = require("path");
// const {VueLoaderPlugin} = require("vue-loader");
// module.exports = {
//     entry: './www/app/app.js',
//     output: {
//         filename: "all.js",
//         path: path.resolve(__dirname,"www/dist"),
//         publicPath: "/public/"
//     },
//     watch: true,
//     mode: 'development',
//     module: {
//         rules: [{
//             test: /\.jsx?$/g,
//             include: [
//                 path.resolve(__dirname, "www/app/app")
//             ],
//             exclude: [
//                 path.resolve(__dirname, "node-modules")
//             ]
//         },{
//             test:/\.vue$/,
//             loader:"vue-loader",
//             include: [
//                 path.resolve(__dirname, "www/app")
//             ],
//             exclude: [
//                 path.resolve(__dirname, "node-modules")
//             ]
//         },{
//             test:/\.css$/,
//             use:[
//                 "vue-style-loader",
//                 "css-loader",
//                 "less-loader"
//             ]
//         }]
//     },
//     resolve: {
//         alias: {
//             'vue$': 'vue/dist/vue.esm.js'
//         }
//
//     },
//     plugins:[
//         new VueLoaderPlugin()
//     ]
//
//
// }