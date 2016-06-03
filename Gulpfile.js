var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); //Подключаем Sass пакет

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/sass/main.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
});