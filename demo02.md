# 練習2: 執行 contianer, 觀察什麼是獨立運行空間、image 與 container 的關係

### 本機端沒有安裝 node，會找不到 node 指令
```
> node -v
```
### 啟動 node 的 container，在裡面會有 node 指令
```
> docker run -it node:0.10.38 /bin/bash
>> node -v
```

如果本機原本沒有 node:0.10.38 這個 images，他會先 pull 才 run



### 回到本機，觀察 container 的屬性：Container ID, Names 等
```
> docker ps
> docker inspect [container id]
```
### 離開 container
```
>> exit
```
### 觀察以下兩個指令的差別
```
> docker ps
> docker ps -a
```
### 移除 container
```
> docker rm [container id]
或
> docker rm [container name]
```
### 加上 rm 來啟動 node 的 container
```
> docker run -it --rm node:0.10.38 /bin/bash
>> exit
> docker ps -a
```
看不到這個 container 了

### 自己取名字
```
> docker run -it --name node38 node:0.10.38 /bin/bash
> docker ps
> docker rm node38
```