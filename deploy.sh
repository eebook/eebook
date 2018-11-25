#!/usr/bin/env sh
set -e

npm run docs:build

cp -r ./.circleci/ ./docs/.vuepress/dist/
cd docs/.vuepress/dist

echo 'eebook.nujeh.com' > CNAME

git init
git add -A
git config --global user.email "hejun1874@gmail.com"
git config --global user.name "knarfeh"
git commit -m 'deploy'

git push -f git@github.com:eebook/eebook.git master:gh-pages

cd -
