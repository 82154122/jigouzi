'use strict'
var gulp=require('gulp')
var $=require('gulp-load-plugins')();
var browserSync=require('browser-sync').create();
var app={
	srcPath:'src/',
	devPath:'bulid/',
	prdPath:'dist/',
}
// gulp.task('html',function(){
// 	gulp.src(app.srcPath+'**/*.html')
// 	.pipe(gulp.dest(app.devPath))
// 	.pipe($.htmlmin({
// 		collapseWhitespace:true,//去除空格换行
// 		removeComments:true,//去除注释
// 		removeEmptyAttributes:true//删除空的属性
// 	}))
// 	.pipe(gulp.dest(app.prdPath))
// 	.pipe(browserSync.stream());//浏览器同步更新

// });
gulp.task('less',function(){
	gulp.src(app.srcPath+'style/demo1.less')
	.pipe($.less())
	.pipe($.autoprefixer({
		  browsers: ['last 20 versions'],//兼容主流浏览器的最新2个版本
          cascade: false//是否没话属性值，默认值是true
	}))
	.pipe(gulp.dest(app.devPath+'css'))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prdPath+'css'))
	.pipe(browserSync.stream());

});
// gulp.task('html',function(){
// 	gulp.src(app.srcPath+"**/*.html")
// 	.pipe(gule.dest(app.devPath))
// 	.pipe($htmlmin({
// 		collapseWhitespace:true,//去除空格换行
// 		removeComments:true,//去除注释
// 		removeEmptyAttributes:true//删除空的属性
// 	}))
// 	.pipe(gulp.dest(app.prdPath))
// 	.pipe(browserSync.stream())	
// })
// gulp.task('less',function(){
// 	gulp.src(app.srcPath+'style/demo1.less')
// 	.pipe($.less())
// 	.pipe($.autoprefixer({
// 			  browsers: ['last 20 versions'],//兼容主流浏览器的最新2个版本
//           cascade: false//是否没话属性值，默认值是true
// 	}))
// })
// gulp.task('js',function(){
// 	gulp.src(app.srcPath+'images/*')
// 	.pipe($.imagemin())
// 	.pipe(gulp.dest(app.devPath+'inmages/'))
// 	.pipe(gulp(gulp.dest(app.prdPath+'images')))
// 	.pipe(bprwserSync.stream())
// })
