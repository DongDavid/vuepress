# docker

## 相关链接

- [安装教程](https://docs.docker.com/docker-for-mac/install/#install-and-run-docker-for-mac)
- [上手教程](https://docs.docker.com/docker-for-mac/#explore-the-application)

## 备注

- macOS 下所有下载的镜像都保存在`/Users/daviddong/Library/Containers/com.docker.docker/Data/`目录下


## mac下安装docker

- 从[官网](https://store.docker.com/editions/community/docker-ce-desktop-mac)下载安装包
- 用Terminal安装 `brew cask install docker`

## 注册docker账号

可以在官网的[注册页面](https://hub.docker.com)注册账号,只需要邮箱。  
但是注册的时候因为需要人机验证才可以点击注册按钮,而人机验证引用的js文件被墙了,所以需要解决一下网络问题。

## 安装完成后检查

### 查看版本

```
$ docker --version
Docker version 18.03.1-ce, build 9ee9f40

$ docker-compose --version
docker-compose version 1.21.1, build 5a3f1a3

docker-machine --version
docker-machine version 0.14.0, build 89b8332

```

### 判断是否支持实验特性  


```
$ docker version -f '{{.Server.Experimental}}'
true
```

docker命令|说明
--|--
docker inspect |获取所有变量
docker port |查看映射端口
docker run|启动docker
docker ps|查看容器
docker logs|查看容器信息
docker stop|停止容器
docker rm |删除容器
docker-compose|根据配置文件启动容器 docker-compose -f /home/gary/dnmp/docker-compose.yml up -d
docker system df |查看容器占用的硬盘空间
docker system events | 实时查看docker事件0.0
docker system info | 显示系统全局信息
docker system prune | 删除不使用的数据
docker volume|列出所有数据卷-挂载目录
docker volume ls -qf dangling=true|列出所有不使用的数据卷
docker volume rm xxx | 删除数据卷
docker volume rm $(docker volume ls -qf dangling=true)|删除所有不使用的数据卷
docker volume prune|删除所有不使用的数据卷 效果同上

### 查看docker信息  

```
$ docker info
Containers: 0
 Running: 0
 Paused: 0
 Stopped: 0
Images: 0
Server Version: 18.03.1-ce
Storage Driver: overlay2
 Backing Filesystem: extfs
 Supports d_type: true
 Native Overlay Diff: true
Logging Driver: json-file
Cgroup Driver: cgroupfs
Plugins:
 Volume: local
 Network: bridge host ipvlan macvlan null overlay
 Log: awslogs fluentd gcplogs gelf journald json-file logentries splunk syslog
Swarm: inactive
Runtimes: runc
Default Runtime: runc
Init Binary: docker-init
containerd version: 773c489c9c1b21a6d78b5c538cd395416ec50f88
runc version: 4fc53a81fb7c994640722ac585fa9ca548971871
init version: 949e6fa
Security Options:
 seccomp
  Profile: default
Kernel Version: 4.9.87-linuxkit-aufs
Operating System: Docker for Mac
OSType: linux
Architecture: x86_64
CPUs: 2
Total Memory: 1.952GiB
Name: linuxkit-025000000001
ID: U4FI:W2OR:IQFG:XOPV:FZNT:SIAF:XY23:3CMM:RV22:KQSE:5KE6:55XC
Docker Root Dir: /var/lib/docker
Debug Mode (client): false
Debug Mode (server): true
 File Descriptors: 21
 Goroutines: 39
 System Time: 2018-06-09T15:05:19.546403Z
 EventsListeners: 2
HTTP Proxy: docker.for.mac.http.internal:3128
HTTPS Proxy: docker.for.mac.http.internal:3129
Registry: https://index.docker.io/v1/
Labels:
Experimental: true
Insecure Registries:
 127.0.0.0/8
Live Restore Enabled: false
```

## 镜像加速  

鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，我们可以需要配置加速器来解决，我使用的是网易的镜像地址：http://hub-mirror.c.163.com。  

```
https://registry.docker-cn.com
http://hub-mirror.c.163.com
https://docker.mirrors.ustc.edu.cn
```
在任务栏点击 Docker for mac 应用图标 -> Perferences... -> Daemon -> Registry mirrors。在列表中填写加速器地址即可。修改完成之后，点击 Apply & Restart 按钮，Docker 就会重启并应用配置的镜像地址了。

## 启动docker

- 直接在Dashboard上点击docker图标启动
- 在Terminal执行

## 执行hello world

```
$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
9bb5a5d4561a: Pull complete 
Digest: sha256:f5233545e43561214ca4891fd1157e1c3c563316ed8e237750d59bde73361e77
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/engine/userguide/
 ```

## 启动webserver服务器

```
$ docker run -d -p 80:80 --name webserver nginx
Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx
f2aa67a397c4: Pull complete 
1cd0975d4f45: Pull complete 
72fd2d3be09a: Pull complete 
Digest: sha256:3e2ffcf0edca2a4e9b24ca442d227baea7b7f0e33ad654ef1eb806fbd9bedcf0
Status: Downloaded newer image for nginx:latest
2395d101183c5932ad76fb32deaf080c55c6414e97d252bf6754bbdf831f6e7a

# 查看运行中的docker容器列表
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                NAMES
2395d101183c        nginx               "nginx -g 'daemon of…"   4 minutes ago       Up 4 minutes        0.0.0.0:80->80/tcp   webserver

# 查看运行中的docker容器列表
$ docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                NAMES
2395d101183c        nginx               "nginx -g 'daemon of…"   5 minutes ago       Up 5 minutes        0.0.0.0:80->80/tcp   webserver

# 停止docker webserver
$ docker container stop webserver

# 查看所有的docker容器
$ docker container ls -a
$ docker container ls -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                      PORTS               NAMES
2395d101183c        nginx               "nginx -g 'daemon of…"   7 minutes ago       Exited (0) 14 seconds ago                       webserver
153ea48ff3c6        hello-world         "/hello"                 9 minutes ago       Exited (0) 9 minutes ago                        optimistic_mcnulty

# 移除docker容器
$ docker container rm webserver

# 查看本地docker镜像
$ docker image ls

# 删除本地docker镜像
$ docker image rm nginx
```
## 下载docker镜像

```
docker pull mysql
docker pull nginx
```

```
sudo docker run --name=mysql -it -p 3306:3306 -e MYSQL_ROOT_PASSWORD=emc123123 -d mysql
```


## 建立LNMP Docker

> 建立一个基于nginx、mysql、php的Docker环境  
[参考链接1](https://blog.csdn.net/xy752068432/article/details/75975065/)  
[参考链接2](https://www.awaimai.com/2120.html)

### 首先下载Docker镜像

```
docker pull mysql:5.7
docker pull php:7.0-fpm
docker pull ngixn:1.10.3
```

### 关联各应用

如果要关联Docker，使不同的Docker之间的服务可以互相调用,那么可以在执行`docker run`的时候使用`--link` 参数
```
docker run -d -v /var/nginx/www/html:/var/www/html -p 9000:9000 --link xy_mysql:mysql --name xy_phpfpm php:7.0-fpm 
```

### 限制容器使用内存

`--memory-swap`这个参数必须和`-m/--memory`共同使用，表示内存和swap一共可用多少，如果两个参数的值相等的话，说明不可以使用swap
```
docker run -m 300m --memory-swap -1
# 容器最多使用300m内存，但是可以使用的swap无限制

docker run -m 300m --memory-swap 1g
# 容器最多使用300m内存，最多使用1g-300m=700m。swap
```

### 启动mysql

```
docker run -d -p 3307:3306 -e MYSQL_ROOT_PASSWORD=root --name xy_mysql mysql:5.6
启动
```
命令|说明
--|--
docker|默认的命令
run|启动镜像
-d|后台运行
-p|`-p 3307:3306` 添加主机到容器的端口映射将本地的3307端口映射到容器的3306端口<br>`-p 127.0.0.1:3308:3306`也可以将指定IP的端口映射到容器的特定端口 <br>`-p 127.0.0.1::3306`随机分配一个本机端口映射到容器指定端口 <br>`127.0.0.1:5000:5000/udp`指定udp端口 
-e|设置环境变量 为mysql设置root密码
--name|为容器命名，不可重复、随便起
-m|设置容器可用最大内存
--link=[]|链接到另一个容器
-expose=[]|开放一个或一组端口
-v |目录映射 `-v /docker目录:/本机目录`

链接到docker内执行相关命令
```
docker exec -ti xy_mysql /bin/bash
```
-t 在容器里生产一个伪终端  
-i 对容器内的标准输入 (STDIN) 进行交互

进入mysql容器后，创建一个远程访问的账号  

  

### 启动php-fpm


```
# 其实不需要link也可以，因为可以通过ip加端口访问到
docker run -d -v /var/nginx/www/html:/var/www/html -p 9000:9000 --link xy_mysql:mysql --name xy_phpfpm php:7.0-fpm 

```
在docker中为php安装mysql的pdo扩展
```
docker-php-ext-install pdo_mysql
```
### 启动nginx

```
docker run -d -p 80:80 --name xy_nginx -v /var/nginx/www/html:/var/www/html --link xy_phpfpm:phpfpm --name xy_nginx nginx:1.10.3
```

```
进入容器修改nginx的配置文件 
docker exec -ti xy_nginx /bin/bash

nginx重启
docker exec xy_nginx nginx -s reload
```


## 实际操作  

```
$ docker run -d -p 80:80 -v /Users/daviddong/workSpace/docker/nginx:/nginx --name webserver nginx
成功后会输出container的id

# 进入名称为webserver的container ，可以通过命令行执行命令
$ docker exec -ti webserver /bin/bash
root@9dc7ebf7de33:/# 
容器中默认是没有vi的。需要安装vi
不过要先执行
apt update
apt-get update
cp 
```