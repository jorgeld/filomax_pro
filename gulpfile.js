var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var cleanCSS = require('gulp-clean-css');
var minifyJS = require('gulp-minify');
var minifyIMG = require('gulp-imagemin');
var runSequence = require('run-sequence');

//Minificado de ficheros css
gulp.task('compressCSS',function(){
    return gulp.src('css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compressJS', function() {
    gulp.src('js/*.js')
        .pipe(minifyJS({
            ext:{
                src:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('compressIMG',function(){
    gulp.src('images/**/*.jpg')
        .pipe(minifyIMG())
        .pipe(gulp.dest('dist/images'));
    gulp.src('images/**/*.png')
        .pipe(minifyIMG())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('minificar',function(){
    runSequence('compressCSS','compressJS','compressIMG');
});

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("**/*.css").on("change", reload);
    gulp.watch("*.js").on("change", reload);
});