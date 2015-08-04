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

    githubPages: {
      target: {
        options: {
          commitMessage: 'push'
        },
        src: ['_site','_config.yml']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-github-pages');

  grunt.registerTask('deploy', ['githubPages:target']);
};
