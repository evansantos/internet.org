module.exports = function (grunt) {
  grunt.initConfig({
    shell: {
      run_file:{
        command: 'sh ./deploy.sh',
        options: {
            stdout: true
        }
      }
    },
    hologram: {
      generate: {
        options: {
          config: 'hologram_config.yml'
        }
      }
    },
    watch: {
      run_file: {
        files: ["**/*.md","**/*.html","!/_site"],
        tasks: ["shell:run_file","hologram:generate"]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-hologram');

  grunt.registerTask('prod', function() {
    var conf = grunt.file.readYAML('_config.yml');
    conf.baseurl= '/internet.org';
    conf.url = 'http://gpechim.github.io';
    YAML = require('yamljs');
    grunt.file.write('_config.yml', YAML.stringify(conf));
  });
};