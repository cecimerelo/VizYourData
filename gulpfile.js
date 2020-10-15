const jest = require('gulp-jest').default;
const gulp = require("gulp");

gulp.task('unit', () => {
    return gulp.src('tests/unit')
        .pipe(jest({coverage: true}))
})

gulp.task('test', gulp.parallel('unit'));
