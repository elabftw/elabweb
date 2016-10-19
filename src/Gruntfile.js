/**
 * Gruntfile.js
 *
 * Run 'grunt' in shell to compile javascript and css files
 *
 */
module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          'elabweb.min.js': ['_includes/js/site.js']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', 'uglify');
};
