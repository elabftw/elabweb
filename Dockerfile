# serve www.elabftw.net on port 4000
FROM ruby:2.3
MAINTAINER Nicolas CARPi <nicolas.carpi@curie.fr>

COPY ./src /src

WORKDIR /src

RUN gem install jekyll

EXPOSE 4000

ENTRYPOINT jekyll serve
