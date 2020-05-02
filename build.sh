#!/usr/bin/env bash
cd src || exit 1
# install js dependencies
docker run --rm -v "$PWD:/usr/src/app" -w /usr/src/app -it node:current-alpine yarn install
# build minified assets
./node_modules/.bin/grunt
# build website
docker run --rm -v "$PWD:/srv/jekyll" -it jekyll/builder:3.8 jekyll build
