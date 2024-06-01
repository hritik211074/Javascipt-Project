/* eslint-disable */

const path = require('path');
// entry: './source/index.js',
// output: ./my_section/main.js
module.exports = {
    entry: './source/index.js',
    output: {
        publicPath: 'my_section',
        path: path.resolve(__dirname, 'my_section'),
        filename: 'main.js'
    }
};