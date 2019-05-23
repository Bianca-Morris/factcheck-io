module.exports = mode => ((mode === 'production') ? require('./webpack.prod.js') : require('./webpack.dev.js'));
