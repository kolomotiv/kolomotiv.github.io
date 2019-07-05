var gulp = require("gulp");
var less = require ("gulp-less");
var plumber= require("gulp-plumber");
var minify = require ("gulp-csso"); 
var rename = require("gulp-rename");
var postcss= require("gulp-postcss");
var server= require("browser-sync").create();
var autoprefixer= require("autoprefixer");
var imagemin= require ("gulp-imagemin");
var webp = require ("gulp-webp");
var svgstore= require ("gulp-svgstore");
var imageminWebp = require('imagemin-webp');
const htmlmin = require('gulp-htmlmin');
// var run = require("run-sequence");
// var del = require("del");




//css
 gulp.task("less", function(){
   return gulp.src("ARstudio/less/style.less")
   .pipe(plumber())
    .pipe(less())
.pipe(postcss([
   autoprefixer('last 2 versions')// префиксы 
]))
    .pipe( gulp.dest("Arstudio/css"))
 
    // .pipe(server.stream());
   
  
   
});
//mini css
gulp.task("minicss",function(){
  return gulp.src("css/style.css")
   .pipe(minify())// создает мини css
    .pipe(rename("style.min.css"))// перезагружает страницу
    .pipe(gulp.dest("css"));  
});


// server
gulp.task("serve",["less"], function(){
  server.init({
   server: "" ,
   port: 8080,
   open: true,
   notify: false
  });
  gulp.watch("less/**/*.less",  ["less"]);
  gulp.watch("*.html")
  .on ("change",server.reload);
});

//imagemin
gulp.task("images", function(){
  return gulp.src("Images/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel:3}),
    imagemin.jpegtran({progressive:true}),
    imagemin.svgo(),
  ])) 
  .pipe(gulp.dest("minimages"));

});


//webp
gulp.task("webp", function(){
  return gulp.src("Images/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imageminWebp({quality: 90})
  ])) 
  .pipe(gulp.dest("webp"));
   
 });




 //sprite
 gulp.task("sprite",function(){
  return gulp.src("svg/*.svg")
  .pipe(svgstore({
    inlineSvg:true
  }))
   .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("svg/svg-sprite"));

 });

 
 //minify HTML
 gulp.task('minify', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('minhtml'));
});

//  //build

//  gulp.task("build",function(done){
//    run( "clean","copy", "less","sprite",done);
//  });


// gulp.task("copy",function(){//копирование
//   return gulp.src([
//     "fonts/*.{woff,woff2}",
//     "Images/**",
//     "js/**"
//   ],{
//   base:""//чтобы создавать папки
//   })
//   .pipe(gulp.dest("build"));
// });

// gulp.task("clean",function(){
//   return del ("build");//почему то удаляет папку
// });//не забываем изменить package json 
