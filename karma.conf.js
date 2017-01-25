module.exports = function(config) {
  config.set({
    basePath: '', // корневая папка для роботы karma
    frameworks: ['jasmine','requirejs'],
    files: [
       // указываем все файлы зависимости и test-main для инициализайи
       // requirejs

       // папка с тестами
      {pattern: 'spec/*Spec.js', included: false},
       // папка с скриптами, модулями
      {pattern: 'js/**/*.js', included: false},
       // папка с модулем bower_components
      {pattern: 'bower_components/**/*.js', included: false},
      {pattern: 'sample.jpg', watched: false, included: false, served: true, nocache: false},
       // директорий с test-main.js
      'js/test-main.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,

    proxies: {
     "/base/": "http://localhost:9876/base/"
},
  })
};
