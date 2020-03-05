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
          'elabweb.min.js': [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/js/dist/util.js',
            'node_modules/bootstrap/js/dist/alert.js',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
            'node_modules/@fortawesome/fontawesome-free/js/all.js',
            '_includes/js/site.js'
          ]
        }
      }
    },
    cssmin: {
      target: {
        files: {
          '_includes/css/awesome-bootstrap.min.css': [
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
          ]
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin']);
  grunt.registerTask('css', 'cssmin');
};
