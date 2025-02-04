#!/bin/sh
set -e

DIR=$(dirname "$(readlink -f "$0")")

# . "$DIR/.env"

cd $DIR
npm i
npm run start

echo ""
echo "------------------------------------------------------"
echo "------------------- DONE  ----------------------------"
echo "------------------------------------------------------"
echo ""
echo ">>> if you need to reboot the api and the ui, run:"
echo ""
echo "api/run.sh"
echo "ui/run.sh"
echo ""
echo ""
echo ">>> to try your running solution:"
echo ""
echo "api:  http://localhost:3777/graphql"
echo " ui:  http://localhost:8777"
echo " db:  $DATABASE_URL"

cd "$DIR"
