#!/bin/bash

# Deploy Script
# Author: Gerson Pechim <gerson.pechim@easytaxi.com.br>, Evandro Santos <evandro.santos@easytaxi.com.br>
# Updated At: 2015-08-07

DATE=$(date +"%Y%m%d_%H%M%S")
HOUR=$(date +"%H%M%S")

# Run production task
grunt prod
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

# Run developers task
grunt dev