# 練習7: 掛載 volume 與 link 資料庫

### 先用互動模式建好程式
-v host-dir:container-dir

```
> docker run -it -v /home/azole/nodesrv:/nodesrv -p 8080:80 --privileged=true node:0.10.38 /bin/bash
>> npm install
```

發現本機這邊也出現檔案了！

```
> ls nodesrv
```

啟動看看：

```
>> node index.js
```
發現沒有 redis 可以連，那就先來啟動一個 redis

### 啟動 redis
```
> docker run -d --name myredis redis
```
### 關掉剛剛的 nodesrv，重新啟動，但現在加上 link
--link [name or id]:alias

```
> docker run -it -v /home/azole/nodesrv:/nodesrv -p 8080:80 --privileged=true --link myredis:redis node:0.10.38 /bin/bash
```
### 看一下 container 的 hosts 
```
>> cat /etc/hosts
>> ping redis
>> node index.js
>> exit
```
### 以守護模式啟動
-w="" 指定 container 工作目錄

```
> docker run -d -v /home/azole/nodesrv:/nodesrv -p 8080:80 --privileged=true --link myredis:redis -w="/nodesrv" node:0.10.38 node index.js
```

