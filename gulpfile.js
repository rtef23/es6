const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");

gulp.task("default", function(){
  /*
  * eslint를 사용하여 javascript를 분석하게 하는 코드
  * */
  // gulp
  //   .src(["public/src/**/*.js"])
  //   .pipe(eslint())
  //   .pipe(eslint.format());

  /*
  * public/src 경로에 있는 javascript 파일들을
  * es5문법으로 변경해서 public/dist에 저장하는 코드
  * */
  gulp
    .src("public/src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});
