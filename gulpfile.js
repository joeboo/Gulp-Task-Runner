"use strict";

let gulp = require('gulp');
let $ = require('gulp-load-plugins')(),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    jade = require('gulp-jade'),
    prefix = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    html5Lint = require('gulp-html5-lint'),
    uglify = require('gulp-uglify'),
    del = require('del');


// Note:
// Adding this return statement acts as a promise. Without the return statement, other tasks won't know when the concatScripts tasks as finished and so they'll start right away, instead of waiting for it to finish.
let sassPaths = [
    'bower_components/foundation/scss'
];

let jadePaths = [
    'jade/index.jade',
    'jade/generic.jade'
];

gulp.task('sass', function() {
    return gulp.src('scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe($.sass({
            includePaths: sassPaths,
            outputStyle: 'compact'
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9']
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css'))
        .pipe(notify({ message: 'Styles task complete' }));
});


//Gulp Concat Scripts Task
gulp.task('concatScripts', function() {
    return gulp.src([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/what-input/what-input.js',
            'bower_components/foundation-sites/dist/foundation.js',
            'js/main.js'
        ])
        //  .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('js'));
});
// Gulp Minify Scripts Task
gulp.task('minifyScripts', ['concatScripts'], function() { // this allows you to run concatScripts first then minifyScripts task will runs straight after
    return gulp.src('./js/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js'));
});


// Gulp Compile JADE Task
/*gulp.task('jade', function () {
	return gulp.src(jadePaths)
	.pipe(jade({
      pretty: true
    }))
	.pipe(gulp.dest('jade'));
})



// Gulp gulp-html5-lint Task
gulp.task('html5-lint', function() {
    return gulp.src('./jade/*.html')
    //return gulp.src('*.html')
        .pipe(html5Lint());
});
*/

// Gulp Image Compressed Task
gulp.task('imagemin', function() {
    gulp.src('img/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('dest/img'));
});



// Gulp gulp-html5-lint Task
gulp.task('html5-lint', function() {
    return gulp.src('./jade/*.html')
        //return gulp.src('*.html')
        .pipe(html5Lint());
});


gulp.task('sprite', function() {
    let spriteData = gulp.src('img/sprites/*.png')
        .pipe(spritesmith({
            /* this whole image path is used in css background declarations */
            imgName: '../img/sprite.png',
            cssName: 'sprite.css'
        }));
    spriteData.img.pipe(gulp.dest('img'));
    spriteData.css.pipe(gulp.dest('css'));
});

// Gulp Compile JADE
gulp.task('jade', function() {
    return gulp.src("jade/index.jade")
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('jade'));
})



// Gulp Watch Task
gulp.task('development', function() {
    // The first gulp.watch method only watches the Sass files, and then only runs the compileSass task when they change.
    gulp.watch('sass/**/*.sass', 'sass/**/*.scss', ['sass']);

    //The second watch block is only watching the main.js file, and then only runs the concatScripts method.
    // This is important because it allows Gulp to only run the necessary tasks based on a file change
    gulp.watch('js/main.js', ['concatScripts']);
})



// Gulp Clean or known as Delete Task
gulp.task('clean', function() {
    del(['dist', 'css/app.css*', 'js/app*.js*']);
})


// Gulp Serve Task
gulp.task('serve', ['watchFile']);



// // Gulp Development Task
// gulp.task('dev', ['minifyScripts','sass'], function () {
// 	return gulp.src(['css/application.css','js/app.min.js','index.html','img/**', 'fonts/**'], {base: './'})
// 	.pipe(gulp.dest('dist'));
// })


// Gulp Buid Task
gulp.task('build', ['minifyScripts', 'sass'], function() {
    return gulp.src(['css/application.css', 'js/app.min.js', 'index.html', 'img/**', 'fonts/**'], { base: './' })
        .pipe(gulp.dest('dist'));
})

gulp.task("default", ["clean"], function() {
    gulp.start('build');
});
