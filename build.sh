#!/usr/bin/env bash

# Fail on error
set -e

npm config set @blogfoster:registry https://registry.npmjs.org
npm config set //registry.npmjs.org/:_authToken ${NPM_TOKEN}

npm run check
npm run build-bundle

# Disabled for now
# if [ "$TARGET_ENV" = "stage" ]
# then
#   npm run storybook:build:vercel
# fi
