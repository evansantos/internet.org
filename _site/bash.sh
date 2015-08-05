grunt prod
echo "Start build...";
jekyll build
git add --all
git commit -m 'deploy'
git push
echo "Finish build!!";
grunt dev