#!/bin/bash

docker run -t --rm --name comment_mentions \
            -v $PWD/nginx:/etc/nginx/conf.d/ \
            -p 80:80 comment-mentions
