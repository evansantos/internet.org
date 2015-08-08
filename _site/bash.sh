#!/bin/bash

# Deploy Script
# Author: Gerson Pechim <gerson.pechim@easytaxi.com.br>, Evandro Santos <evandro.santos@easytaxi.com.br>
# Updated At: 2015-08-07

date=$(date +"%Y%m%d_%H%M%S")

# Run production task
grunt prod
echo "--------------------------------------------------------------------";
echo "Build start...";
echo "--------------------------------------------------------------------";

# Run bulid
jekyll build

# Upload packaged
git add --all
git commit -m 'deploy - '$date'!'
git push
echo "--------------------------------------------------------------------";
echo "Build complete!! _site packaged sent to git! WHORRAY!!!";
echo "--------------------------------------------------------------------";

# Run developers task
grunt dev