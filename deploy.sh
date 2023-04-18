#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/NoriYang/vue3-CandleWorld.git master:gh-pages

cd -