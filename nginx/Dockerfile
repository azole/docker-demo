# This is a nginx server
FROM debian
MAINTAINER azole <azole@pchome.com.tw>
RUN apt-get -qq update
RUN apt-get -y install nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]