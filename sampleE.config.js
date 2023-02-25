const path = require('path');

module.exports = {
    mode: 'production',
    entry: './sampleD.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'sampleE.bundle.js',
    }
};