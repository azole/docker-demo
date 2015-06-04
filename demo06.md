# 練習6: 掛載 volume 
```
> docker run --name websrv -d --privileged=true -v /home/azole/websrv:/var/www/html -p 8080:80 azole/nginx2
```

- 開瀏覽器觀察，不是預設的網頁了。
- 在本機修改網頁，也能立刻生效。
