FROM python:3.7

MAINTAINER dilmnqvovpnmlib <simplelpmis6@gmail.com>

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

ENV TZ Asia/Tokyo

RUN apt-get update
RUN apt-get install -y nginx && \
  apt-get install -y supervisor && \
  apt-get install -y vim && \
  apt-get install -y curl

RUN mkdir /app
WORKDIR /app
ADD . /app

# Install python packages.
RUN pip install -r requirements.txt

# Copy configuration files.
COPY ./conf/default /etc/nginx/sites-enabled/default
COPY ./conf/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 80

ENTRYPOINT ["bash", "./docker-entrypoint.sh"]
