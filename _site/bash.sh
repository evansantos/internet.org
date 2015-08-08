#!/bin/bash

# Deploy Script
# Author: Gerson Pechim <gerson.pechim@easytaxi.com.br>, Evandro Santos <evandro.santos@easytaxi.com.br>
# Updated At: 2015-08-07

DATE=$(date +"%Y%m%d_%H%M%S")
grunt prod
echo "--------------------------------------------------------------------";
echo "Build start...";
echo "--------------------------------------------------------------------";
jekyll build
git add --all
git commit -m 'Deploy '$DATE''
git push
echo "--------------------------------------------------------------------";
echo "Build complete!! _site packaged sent to git! WHORRAY!!!";
echo "--------------------------------------------------------------------";
grunt dev