# 練習8: docker-compose

接續 demo7，在 demo7 中，會啟動 redis 與一台用 node 開發的 web server，當系統組合複雜的時候，每次都手動去下指令，一來很不方便，二來也不易於管理。（記得 Dockerfile 嗎？我們希望都能夠把這些環境的部署文件化起來，可當文件、又可版本控管。）     

docker 官方提供了一個工具：[compose](https://docs.docker.com/compose/)，可以根據設定檔一次啟動一組 container。   

安裝：[https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

### 編寫 compose 設定檔

在 demo7 最後的指令是：

```
docker run -d --name myredis redis

docker run -d -v /home/azole/nodesrv:/nodesrv -p 8080:80 --privileged=true --link myredis:redis -w="/nodesrv" node:0.10.38 node index.js
```

在 compose 的設定檔 docker-compose.yml 中，其實就是把這兩串指令寫下來而已：

```
web:
  image: node:0.10.38
  command: node index.js
  ports:
   - "8080:80"
  volumes:
   - .:/nodesrv
  links:
   - myredis:redis
  privileged: true
  working_dir: /nodesrv
myredis:
  image: redis
```
大家可以比較一下 docker-compose.yml 中的設定的項目與我們手動下指令的指令內容，是不是幾乎一模一樣呢？

### 執行

然後執行 (-d 是指以守護進程方式執行，大家可以試試看不加 -d 能看到什麼。)

```
> docker-compose up -d
```
執行完這個指令後，可以看到以下訊息：

```
Creating nodesrv_myredis_1...
Creating nodesrv_web_1...
```

可以用

```
> docker-compose ps
或
> docker ps
```
來看 container 的狀態。

### 關閉與移除

可以整組一起啟動，當然就可以整組一起關閉：

```
> docker-compose stop
```

整組一起移除：


```
> docker-compose rm
```

是不是很方便呢？   

不過很可惜的是，官方目前仍不建議使用在 production 環境，但在開發或測試環境，我們還是可以試試看的。