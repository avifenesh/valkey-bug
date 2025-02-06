#!/usr/bin/env ash

mkdir /code
cp -r /opt/* /code
cd /code

npm i

npm run dev
