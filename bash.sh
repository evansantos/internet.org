echo "Start build...";
jekyll build
git add .
# git add _config.yml
git commit -m 'deploy'
git push
echo "Finish build!!";