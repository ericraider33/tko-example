const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                type: "asset/source",
            },
        ],
    },
    experiments: {
        topLevelAwait: true
    }
};
