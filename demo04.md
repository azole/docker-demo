# 練習4: Dockerfile

### This is a nginx server
```
FROM debian
MAINTAINER azole <azole@pchome.com.tw>
RUN apt-get -qq update
RUN apt-get -y install nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```
> docker build -t azole/nginx2 .
```
### 啟動看看
```
> docker run -it --rm azole/nginx2 /bin/bash
>> nginx -v 
```