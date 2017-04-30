#!/bin/bash
# Adapted from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd.

set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo -e "\e[36m\e[1mBuild triggered for PR #${TRAVIS_PULL_REQUEST} to branch \"${TRAVIS_BRANCH}\" - building without deploying."
  npm run build
  exit 0
fi

echo -e "\e[36m\e[1mBuilding for branch push ${TRAVIS_BRANCH} - building and deploying."

# Initialise some useful variables
REPO=`git config remote.origin.url`
SSH_REPO="https://datitisev:$ENCRYPTED_TOKEN@github.com/datitisev/DiscordBot-YappyGitLab"
SHA=`git rev-parse --verify HEAD`

# Checkout the repo in the target branch
TARGET_BRANCH="gh-pages"
git clone $REPO dist -b $TARGET_BRANCH

# Build the site
npm run build

# Commit and push
cd dist
git add --all .
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"
git commit -m "Site build: ${SHA}" || true
git push -q $SSH_REPO $TARGET_BRANCH &> /dev/null
