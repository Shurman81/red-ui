module.exports = {
    entry: { 
        vanilla: "./src/vanilla.js",
        index: "./src/index.js"
    },
    output: {
        path: "./dist/",
        filename: "bundle-[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};