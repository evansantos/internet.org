echo "Start build...";
jekyll build
git add .
git commit -m 'deploy'
git push
echo "Finish build!!";