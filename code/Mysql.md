# Mysql使用记录

## 操作

## Docker下Mysql创建远程账号

创建一个原创账号
```
docker run -d -p 3307:3306 -e MYSQL_ROOT_PASSWORD=root --name ddv_mysql mysql:5.7
docker exec -ti ddv_mysql /bin/bash
mysql -uroot -proot
grant all privileges on *.* to "ddv"@"%" identified by "docker.5.7";
flush privileges;
exit;
```

从宿主机连接Docker中的数据库
```
mysql -h127.0.0.1 -P3307 -uddv -pdocker.5.7
```


### 创建数据库

```
# 创建数据库 使用数据库默认编码
CREATE DATABASE `test2`;
# 创建数据库且声明编码为utf8
CREATE DATABASE `test2` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
# 创建数据库且声明编码为utf8mb4 5.7以后默认是这个编码
CREATE DATABASE `test2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
```
### 删除数据库

```
drop database databasename;
```

### 导入数据库

将bak.sql导入到databasename数据库中

```
mysql -h127.0.0.1 -P3307 -uddv -pdocker.5.7  databasename < bak.sql
```

