const gulp = require("gulp");
const gulpServer = require("gulp-server-livereload");

gulp.task("build", (callback) => {
  console.log("Construyendo el sitio");
  setTimeout(callback, 1200);
});

gulp.task("serve", (callback) => {
  gulp.src("www").pipe(
    gulpServer({
      livereload: true,
      open: true,
    })
  );
});

gulp.task("default", gulp.series("build", "serve"));
