npm run build # 打包檔案，產生 dist

cd dist

# echo > .nojekyll
# git init # 對 dist git 初始化

git add . # 對 dist 內所有檔案 add

git commit -m 'deploy' # 提交

git push -f git@github.com:LeeFang14/react-project.git master:gh-pages