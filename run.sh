#!/bin/bash

docker run --rm --name comment_mentions \
            -v "$PWD/nginx.conf":/etc/nginx/conf.d/app.conf \
            -p 80:80 comment-mentions
