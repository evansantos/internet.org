#!/bin/bash

# Deploy Script
# Author: Gerson Pechim <gerson.pechim@easytaxi.com.br>, Evandro Santos <evandro.santos@easytaxi.com.br>
# Updated At: 2015-08-07

DATE=$(date +"%Y%m%d_%H%M%S")
HOUR=$(date +"%H:%M:%S")

# Run production task
grunt prod
# node grunt/environment.js

echo '--------------------------------------------------------------------';
echo 'Build start at '$HOUR'...';
echo '--------------------------------------------------------------------';

# Generate packaged and run deploy
jekyll build
git add --all
git commit -m 'Deploy '$DATE''
git push
echo '--------------------------------------------------------------------';
echo 'Build complete at '$HOUR'!! _site packaged sent to git! WHORRAY!!!';
echo '--------------------------------------------------------------------';

grunt dev
# node
# echo"
#     var conf = grunt.file.readYAML('_config.yml');
#     conf.baseurl = '';
#     conf.url = '';
#     YAML = require('yamljs');
#     grunt.file.write('_config.yml', YAML.stringify(conf));
# ";