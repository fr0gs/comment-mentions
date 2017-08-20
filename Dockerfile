FROM madnificent/ember:2.14.0 as ember

COPY . /app
RUN npm rebuild node-sass && npm install && bower install
RUN ember build

FROM semtech/mu-nginx-spa-proxy
COPY --from=ember /app/dist /app