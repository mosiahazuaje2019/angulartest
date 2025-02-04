#!/bin/sh
set -e

DIR=$(dirname "$(readlink -f "$0")")

# . "$DIR/.env"

cd $DIR
npm i
npm run watch

