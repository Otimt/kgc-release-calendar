// 代理请求 / 端口设置 / 编译路径
var config = require('./config.js');
/**
 * gulp 自动化构建工具
 * gulpfile.js 配置文件
 * 
 */
var fs            = require('fs');
var path          = require('path');

var gulp          = require('gulp');
var gutil         = require('gulp-util'); // 打印日志 log
var gulpBabel = require("gulp-babel");
// var livereload  = require('gulp-livereload');


gulp.task("babel", function () {
    return gulp.src(config.dev.js)
        .pipe(gulpBabel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(config.build.js));
});