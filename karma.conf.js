'use strict';

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            { pattern: './karma-test-shim.js', watched: false }
        ],

        preprocessors: {
            './karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: require('./webpack/webpack.test'),

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['mocha'],

        mochaReporter: {
            maxLogLines: 2
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    };

    config.set(_config);
};
