module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      somename: require('./webpack.config.js')
    },
    clean: {
        dev: ['*.js', '*.js.map', '!webpack.config.js', '!Gruntfile.js'],
        all: ['node_modules', 'typings']
    }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['webpack']);

};





