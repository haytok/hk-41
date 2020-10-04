# 本番 ver
FROM node:12-alpine

MAINTAINER dilmnqvovpnmlib <simplelpmis6@gmail.com>

ENV TZ Asia/Tokyo
ENV CI=true

# update
RUN apk update
RUN apk add nginx && \
  apk add vim && \
  apk add less && \
  apk add supervisor && \
  apk add openrc

RUN mkdir /app
WORKDIR /app
RUN mkdir build
COPY ./build ./build
COPY ./docker-entrypoint.sh .

RUN sed -i 's/#rc_sys=""/rc_sys="lxc"/g' /etc/rc.conf
RUN echo 'rc_provide="loopback net"' >> /etc/rc.conf
RUN sed -i 's/^#\(rc_logger="YES"\)$/\1/' /etc/rc.conf
RUN sed -i '/tty/d' /etc/inittab
RUN sed -i 's/hostname $opts/# hostname $opts/g' /etc/init.d/hostname
RUN sed -i 's/mount -t tmpfs/# mount -t tmpfs/g' /lib/rc/sh/init.sh
RUN sed -i 's/cgroup_add_service /# cgroup_add_service /g' /lib/rc/sh/openrc-run.sh
RUN rc-status
RUN touch /run/openrc/softlevel

# copy configuration files.
COPY ./conf/supervisord.conf /etc/supervisord.conf
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["/bin/sh", "./docker-entrypoint.sh"]
