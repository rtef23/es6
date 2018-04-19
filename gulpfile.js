const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");
const browserify = require("browserify");
const source = require("vinyl-source-stream");

gulp.task("default", ["bundle"]);

/**
 * eslint를 사용하여 javascript를 분석하게 하는 task
 */
gulp.task("eslint", function () {
  gulp
  .src(["public/src/**/*.js"])
  .pipe(eslint())
  .pipe(eslint.format());
});

/**
 * public/src/js 경로에 있는 javascript 파일들을
 * es5문법으로 변경해서 public/dist/js/babel 에 저장하는 task
 */
gulp.task("babel", function () {
  gulp
  .src("public/src/js/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("public/dist/js/babel"));
});

/**
 * require 문법을 browser에서 사용할 수 있게 변환해주는 task
 */
gulp.task("bundle", ["babel"], function () {
  return browserify("public/dist/js/babel/test.js")
  .bundle()
  .pipe(source("test.js"))
  .pipe(gulp.dest("public/dist/js/browserify"));
});