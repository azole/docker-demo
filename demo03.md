# 練習3: 執行 contianer, 觀察 writable layer 的意思
```
> docker run -t -i node:0.10.38 /bin/bash
>> touch azole.txt
>> ls -al
>> exit
```
### 新的 container 中沒有 azole.txt 這個檔案
```
> docker run -t -i node:0.10.38 /bin/bash
>> ls –al    ## 沒有 azole.txt
>> exit
```
### 先移除 container 2
```
> docker ps 
> docker ps -a
> docker rm [container id2]
```
### 把第1個有 txt 的 container commit 起來
```
> docker commit [container id1] azole/test
> docker images
```
### 啟動這個新的 images
```
> docker -i -t azole/test /bin/bash
>> ls –al    ## 這邊會看到有 azole.txt
>> exit 
```