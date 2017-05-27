var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

/*
 * Variáveis
 */
// Sass origem
var sassFiles = './src/sass/style.sass';

// CSS destino
var cssDest = './css';

// Opções de desenvolvimento
var sassDevOptions = {
    outputStyle: 'expanded'
}

// Opções de produção
var sassProdOptions = {
    outputStyle: 'compressed'
}

/*
 * Tarefas - Tasks
 */
// Task 'sassdev' - Executar com o comando 'gulp sassdev'
gulp.task('sassdev', function() {
    return gulp.src(sassFiles)
        .pipe(sass(sassDevOptions).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

// Task 'sassprod' - Executar com o comando 'gulp sassprod'
gulp.task('sassprod', function() {
    return gulp.src(sassFiles)
        .pipe(sass(sassProdOptions).on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(cssDest));
});

// Task 'watch' - Executar com o comando 'gulp watch'
gulp.task('watch', function() {
    gulp.watch(sassFiles, ['sassdev', 'sassprod']);
});

// Default task - Executar com o comando 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'watch']);