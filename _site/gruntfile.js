module.exports = function (grunt) {

  grunt.initConfig({

    shell: {
      run_file:{
        command: 'sh ./bash.sh',
        options: {
            stdout: true
        }
      }
    },
    watch: {
      run_file: {
        files: ["**/*.md","**/*.html","!/_site"],
        tasks: ["shell:run_file"]
      }
    },

    // Configuration to be run (and then tested).
    githubPages: {
      target: {
        options: {
          // The default commit message for the gh-pages branch
          commitMessage: 'push'
        },
        // The folder where your gh-pages repo is
        src: '_site'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('deploy', ['clean', 'githubPages']);
  // grunt.registerTask('deploy', ['githubPages:target']);
};
