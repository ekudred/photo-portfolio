"use strict";

const gulp = require("gulp");
const {src, dest} = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync").create();
const del = require("del");
const fileinclude = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const gulpSASS = require("gulp-sass");
const plumber = require("gulp-plumber");

const distPath = 'dist';
const srcPath = "#source";

const path = {
  build: {
      html: distPath + "/",
      styles: distPath + "/styles/",
      script: distPath + "/script/",
      images: distPath + "/images/",
      fonts: distPath + "/fonts/"
  },
  src: {
      html: srcPath + "/*.html",
      styles: srcPath + "/styles/styles.scss",
      script: srcPath + "/script/script.js",
      images: srcPath + "/images/**/*.+(png|jpg|gif|ico|svg|webp)",
      fonts: srcPath + "/fonts/**/*.ttf"
  },
  watch: {
      html: srcPath + "/**/*.html",
      styles: srcPath + "/styles/**/*.scss",
      script: srcPath + "/script/**/**/*.js",
      images: srcPath + "/images/**/*.{jpg, png, svg, gif, ico, webp}"
  },
  clean:  "./" + distPath + "/"
}

function browserSync() {
  browsersync.init({
      server: {
          baseDir: distPath,
          index: "index.html"
      },
      port: 8000,
      notify: false
  })
}

function clean() {
  return del(path.clean)
}

function html() {
  return src(path.src.html)
      .pipe(plumber())
      .pipe(fileinclude())
      .pipe(dest(path.build.html))
      .pipe(browsersync.stream())
}

function styles() {
  return gulp.src(path.src.styles)
      .pipe(plumber())
      .pipe(gulpSASS({
          outputStyle: "compressed"
      }))
      .pipe(rename({
          extname: ".min.css"
      }))
      .pipe(autoprefixer({
              overrideBrowserslist: ["last 5 versions"],
              cascade: true
          }))
      .pipe(dest(path.build.styles))
      .pipe(browsersync.stream())
}

// function script() {
//   return gulp.src(path.src.script)
//     .pipe(plumber())
//     .pipe(webpack({
//         mode: "development",
//         output: {
//             filename: "script.min.js"
//         },
//         watch: false,
//         module: {
//           rules: [
//             {
//               test: /\.m?js$/,
//               exclude: /(node_modules|bower_components)/,
//               use: {
//                 loader: "babel-loader",
//                 options: {
//                   presets: [["@babel/preset-env", {
//                       debug: true,
//                       corejs: 3,
//                       useBuiltIns: "usage"
//                   }]]
//                 }
//               }
//             }
//           ]
//         }
//     }))
//     .pipe(gulp.dest(path.build.script))
//     .pipe(browsersync.stream())
// }

function script() {
  return gulp.src(path.src.script)
    .pipe(plumber())
    .pipe(webpack({
        mode: "production",
        output: {
            filename: "script.min.js"
        },
        watch: false,
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [["@babel/preset-env", {
                      debug: true,
                      corejs: 3,
                      useBuiltIns: "usage"
                  }]]
                }
              }
            }
          ]
        }
    }))
    .pipe(gulp.dest(path.build.script))
    .pipe(browsersync.stream())
}

function images() {
  return src(path.src.images)
    .pipe(plumber())
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 3
      })
    )
    .pipe(dest(path.build.images))
    .pipe(browsersync.stream())
}

function fonts() {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
}

function watchFiles() {
  gulp.watch([path.watch.html], html)
  gulp.watch([path.watch.styles], styles)
  gulp.watch([path.watch.script],  script)
  gulp.watch([path.watch.images],  images)
}

const build = gulp.series(clean, gulp.parallel(html, styles, script, images, fonts));
const watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.styles = styles;
exports.script = script;
exports.images = images;
exports.fonts = fonts;
exports.build = build;
exports.watch = watch;
exports.default = watch;