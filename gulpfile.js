const gulp                      = require('gulp'),
      del                       = require('del'),
      sourcemaps                = require('gulp-sourcemaps'),
      plumber                   = require('gulp-plumber'),
      sass                      = require('gulp-sass'),
      autoprefixer              = require('gulp-autoprefixer'),
      cssnano                   = require('gulp-cssnano'),
      babel                     = require('gulp-babel'),
      webpack                   = require('webpack-stream'),
      uglify                    = require('gulp-uglify'),
      concat                    = require('gulp-concat'),
      imagemin                  = require('gulp-imagemin'),
      browserSync               = require('browser-sync').create(),

      src_folder                = './src/',
      src_assets_folder         = src_folder + 'assets/',
      src_plugins_folder        = src_assets_folder + 'plugins/',
      dist_folder               = './dist/',
      dist_assets_folder        = dist_folder + 'assets/',
      dist_plugins_folder       = dist_assets_folder + 'plugins/',
      node_modules_folder       = './node_modules/',
      dist_node_modules_folder  = dist_folder + 'node_modules/',
      js_node_modules_bs4       = 'node_modules/bootstrap/dist/js/bootstrap.min.js',
      jquery_node_modules       = 'node_modules/jquery/dist/jquery.min.js',
      popper_node_modules       = 'node_modules/popper.js/dist/umd/popper.min.js',
      css_node_modules_bs4      = 'node_modules/bootstrap/dist/css/bootstrap.min.css',

      node_dependencies         = Object.keys(require('./package.json').dependencies || {});

gulp.task('clear', () => del([ dist_folder ]));

gulp.task('html', () => {
  return gulp.src([ src_folder + '**/*.html' ], { base: src_folder })
    .pipe(gulp.dest(dist_folder))
    .pipe(browserSync.stream());
});

/*script & file no change*/
gulp.task('js-bootstrap', () => {
  return gulp.src([js_node_modules_bs4])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist_plugins_folder + 'js'))
    .pipe(browserSync.stream());
});
gulp.task('jquery', () => {
  return gulp.src([jquery_node_modules])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist_plugins_folder + 'js'))
    .pipe(browserSync.stream());
});
gulp.task('popper', () => {
  return gulp.src([popper_node_modules])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist_plugins_folder + 'js'))
    .pipe(browserSync.stream());
});
gulp.task('css-bootstrap', () => {
  return gulp.src([css_node_modules_bs4])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist_plugins_folder + 'css'))
    .pipe(browserSync.stream());
});
/**/
gulp.task('sass', () => {
  return gulp.src([ src_assets_folder + 'scss/**/*.scss' ])
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: [ 'last 3 versions', '> 0.5%' ]
      }))
      .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist_assets_folder + 'css'))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src([ src_assets_folder + 'js/**/*.js' ])
    .pipe(plumber())
    .pipe(webpack({
      mode: 'production'
    }))
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: [ '@babel/env' ]
      }))
      .pipe(concat('all.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist_assets_folder + 'js'))
    .pipe(browserSync.stream());
});



gulp.task('images', () => {
  return gulp.src([ src_assets_folder + 'images/**/*.+(png|jpg|jpeg|gif|svg|ico)' ])
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest(dist_assets_folder + 'images'))
    .pipe(browserSync.stream());
});
gulp.task('icons', () => {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(plumber())
    .pipe(gulp.dest(dist_assets_folder + 'webfonts'))
    .pipe(browserSync.stream());
});

gulp.task('fonts', () => {
  return gulp.src('src/assets/scss/font/*')
    .pipe(plumber())
    .pipe(gulp.dest(dist_assets_folder + 'fonts'))
    .pipe(browserSync.stream());
});

gulp.task('vendor', () => {
  if (node_dependencies.length === 0) {
    return new Promise((resolve) => {
      console.log("No dependencies specified");
      resolve();
    });
  }

  return gulp.src(node_dependencies.map(dependency => node_modules_folder + dependency + '/**/*.*'), { base: node_modules_folder })
    .pipe(gulp.dest(dist_node_modules_folder))
    .pipe(browserSync.stream());
});

gulp.task('build', gulp.series('clear', 'html', 'sass', 'js', 'images', 'vendor' ,'js-bootstrap' ,'jquery' ,'popper' ,'css-bootstrap', 'icons', 'fonts'));

gulp.task('dev', gulp.series('html', 'sass', 'js'));

gulp.task('serve', () => {
  return browserSync.init({
    server: {
      baseDir: [ 'dist' ],
      port: 3000
    },
    open: false
  });
});

gulp.task('watch', () => {
  const watchImages = [
    src_assets_folder + 'images/**/*.+(png|jpg|jpeg|gif|svg|ico)'
  ];

  const watchVendor = [];

  node_dependencies.forEach(dependency => {
    watchVendor.push(node_modules_folder + dependency + '/**/*.*');
  });

  const watch = [
    src_folder + '**/*.html',
    src_assets_folder + 'scss/**/*.scss',
    src_assets_folder + 'js/**/*.js'
  ];

  gulp.watch(watch, gulp.series('dev')).on('change', browserSync.reload);
  gulp.watch(watchImages, gulp.series('images')).on('change', browserSync.reload);
  gulp.watch(watchVendor, gulp.series('vendor')).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
