module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		browserSync: {
			bsFiles: {
				src: [
					"assets/css/*.css",
					"assets/js/*.js",
					"assets/vendor/*",
					"*.html",
				],
			},

			options: {
				watchTask: true,
				// ui: {
				// 	port: 3005,
				// },
				port: 3005,
				server: {
					baseDir: "./",
				},
			},
		},

		sass: {
			dist: {
				options: {
					style: "expanded",
					sourcemap: "none",
				},
				files: {
					"assets/css/style.css": "src/scss/style.scss",
				},
			},
		},
		autoprefixer: {
			options: {
				browsers: ["last 2 version", "ie 8", "ie 9"],
			},
			single_file: {
				src: "assets/css/style.css",
				dest: "assets/css/style.css",
			},
		},
		watch: {
			sass: {
				files: ["src/scss/**/*.scss"],
				tasks: ["sass:dist", "autoprefixer"],
			},
		},
	});
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-browser-sync");
	grunt.registerTask("default", ["browserSync", "watch"]);
};
