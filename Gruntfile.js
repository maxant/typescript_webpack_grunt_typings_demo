module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      somename: require('./webpack.config.js')
    }
  });

  grunt.loadNpmTasks('grunt-webpack');

  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['webpack']);

};





