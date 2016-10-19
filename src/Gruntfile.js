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
          'elabweb.min.js': ['node_modules/jquery/dist/jquery.js', '_includes/js/site.js']
        }
      }
    },
    cssmin: {
      target: {
        files: {
          '_includes/css/elabweb.min.css': ['node_modules/font-awesome/css/font-awesome.css']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin']);
  grunt.registerTask('css', 'cssmin');
};
