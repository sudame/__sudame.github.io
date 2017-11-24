const gulp = require("gulp");
const browserSync = require("browser-sync");

gulp.task("default", ["browser-sync"]);

gulp.task("browser-sync", function(){
    browserSync({
        server: {
            baseDir: "./",
            index: "index.html"
        },
        browser: "vivaldi"
    });
});

gulp.task("bs-reload", function(){
    browserSync.reload();
});

gulp.task("default", ["browser-sync"], function(){
    gulp.watch("./*.html", ["bs-reload"]);
    gulp.watch("./ITF-code/**", ['bs-reload']);
    gulp.watch("./sarahah-generator/**", ['bs-reload']);
    gulp.watch("./style/**", ["bs-reload"]);
    gulp.watch("./script/**", ["bs-reload"]);
    
});