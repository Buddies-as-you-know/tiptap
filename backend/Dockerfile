FROM ruby:2.7.3

# install packages
RUN apt-get update -qq && apt-get -y install \
    build-essential \
    libpq-dev \
    mariadb-client

# setting workdir
RUN mkdir /backend
WORKDIR /backend

# add local files to vm
ADD Gemfile /backend/Gemfile
ADD Gemfile.lock /backend/Gemfile.lock

# volume the directory
RUN gem install bundler
RUN bundle install
ADD . /backend