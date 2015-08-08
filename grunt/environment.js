module.exports = {
  grunt.registerTask('dev', function() {
    var conf = grunt.file.readYAML('_config.yml');
    conf.baseurl = '';
    conf.url = '';
    YAML = require('yamljs');
    grunt.file.write('_config.yml', YAML.stringify(conf));
  });

  grunt.registerTask('prod', function() {
    // setTimeout(this.async(), 9900);
    var conf = grunt.file.readYAML('_config.yml');
    conf.baseurl= '/internet.org';
    conf.url = 'http://gpechim.github.io';
    YAML = require('yamljs');
    grunt.file.write('_config.yml', YAML.stringify(conf));
  });
}