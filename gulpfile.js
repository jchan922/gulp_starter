////////////////////////////////////////////////////////////
// REQUIRED
////////////////////////////////////////////////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

////////////////////////////////////////////////////////////
// SCRIPTS
////////////////////////////////////////////////////////////

// GLOBS -> for path finding patterns
    // css/*.css        -> files ending in .css in the css directory
    // css/**/*.css     -> files ending in .css in the css directory and child directories
    // !css/style.css   -> excludes style.css files
    // *.+(js|css)      -> matches all files in the root dir ending in .js or .css

// TASK SYNTAX
    // gulp.task('NAME OF TASK', CALLBACKFUNCTION(){
        //  (your code goes here)
    // });

gulp.task('scripts', function(){
    gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', function(){
    gulp.watch('app/js/**/*.js', ['scripts']);
});


gulp.task('default', ['scripts', 'watch']); // takes in an array of all script names and runs them at once
