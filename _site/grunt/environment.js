var yaml        = require('yamljs');
var e           = yaml.load('_config.yml');

if (e.baseurl === '' && e.url === ''){
    e.baseurl   = '/internet.org';
    e.url       = 'http://gpechim.github.io';
}
else {
    e.baseurl   = '';
    e.url       = '';
}