#!/bin/bash
source $NVM_DIR/nvm.sh

nvm install
nvm use
npm i
npm run package
