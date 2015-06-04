# 練習 5: 把 port 開放出來

-p hostPort:containerPort

```
> docker run --name websrv -d –p 8080:80 azole/nginx2
> netstat -tln | grep 80
```
開瀏覽器觀察