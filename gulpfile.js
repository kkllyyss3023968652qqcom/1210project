const gulp=require("gulp");
const connect = require("gulp-connect");

gulp.task("connect",()=>{
      connect.server({
        root: './dist',
        port:8888,
        livereload: true,
    })
});

gulp.task("html",()=>{
    return gulp.src("./src/index.html").pipe(gulp.dest("./dist/")).pipe(connect.reload());
});
gulp.task("htmls",()=>{
    return gulp.src("./src/html/*.html").pipe(gulp.dest("./dist/html/")).pipe(connect.reload());
});
gulp.task("js",()=>{
    return gulp.src("./src/javascripts/*.js").pipe(gulp.dest("./dist/javascripts/")).pipe(connect.reload());
});
gulp.task("jsondata",()=>{
    return gulp.src("./src/json/*.json").pipe(gulp.dest("./dist/json/")).pipe(connect.reload());
});
gulp.task("images",()=>{
    return gulp.src("./src/images/*.png").pipe(gulp.dest("./dist/images/")).pipe(connect.reload());
});
gulp.task("css",()=>{
    return gulp.src("./src/stylesheets/*.css").pipe(gulp.dest("./dist/stylesheets/")).pipe(connect.reload());
});

// gulp.task("watch",()=>{
//     gulp.watch("./src/index.html", ["html"]);
//     // gulp.watch("./src/html/*.html", ["htmls"]);
//     // gulp.watch("./src/javascripts/*.js", ["js"]);
//     // gulp.watch("./src/json/*.json", ["jsondata"]);
//     // gulp.watch("./src/images/*.png", ["images"]);
//     // gulp.watch("./src/stylesheets/*.css", ["css"]);
// });
// gulp.task("default",["watch","connect"]);
// gulp.task("default",["html","htmls","js","jsondata","images","css","connect"]);