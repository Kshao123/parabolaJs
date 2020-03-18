const gulp = require('gulp'),
  ugLify = require('gulp-uglify'), //压缩js
  babel = require("gulp-babel"),
  del = require('del')

const workPath={
  entry:'./src',
  output:'./lib'
}

// 删除文件
function Del(cb) {
  return del([workPath.output+'/parabola.js'], cb);
}

function build() {
  return gulp.src([workPath.entry+'/**/*.js',"!"+workPath.entry+"/plugins/**/*.js"])
    .pipe(babel())
    .pipe(ugLify())
    .pipe(gulp.dest(workPath.output))
}

exports.default = gulp.series(Del, build);
