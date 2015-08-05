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
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('dev', function() {
    var conf        = grunt.file.readYAML('_config.yml');
    conf['baseurl'] = '';
    conf['url']     = '';
    YAML            = require('yamljs');
    grunt.file.write('config.yml', YAML.stringify(conf));
  });

  grunt.registerTask('prod', function() {
    var conf        = grunt.file.readYAML('_config.yml');
    conf['baseurl'] = '/internet.org';
    conf['url']     = 'http://gpechim.github.io';
    YAML            = require('yamljs');
    grunt.file.write('config.yml', YAML.stringify(conf));
  });
};