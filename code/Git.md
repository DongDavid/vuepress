
# git操作



## git仓库的创建

从命令行创建一个新的仓库
```
touch README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://gogs.dongdavid.com/dongdavid/git-test.git
git push -u origin master
```

从命令行推送已经创建的仓库
```
git remote add origin https://gogs.dongdavid.com/dongdavid/git-test.git
git push -u origin master
```

## git 远程仓库管理

查看已存在的远程仓库别名
```
git remote
```

查看远程仓库详细信息(包括地址)
```
git remote -v
```
增加远程仓库

```
# git remote add 别名 仓库地址
git remote add test https://gogs.dongdavid.com/dongdavid/git-test1.git
```
删除远程仓库
```
git remote remove [仓库别名]
```
修改远程仓库地址
```
# 先删除已有远程仓库，在添加新的远程仓库
git remote remove origin
git remote add origin https://gogs.dongdavid.com/xxx.git

# 直接修改远程仓库地址
git remote set-url origin https://gogs.dongdavid.com/xxx.git
```

## git 提交修改

将当前所有修改存入暂存区
```
git add .
```
提交指定文件的修改
```
git add readme.md
```
提交指定目录下的所有修改
```
git add application/view
```
提交所有的修改，包括删除文件
```
git add -A
git add --all
```
提交被监控文件的修改，未被提交到暂存区/仓库的文件不会被提交  
即新建的文件不会被提交
```
git add -u
git add --update
```
提交被忽略的文件
```
git add -f xxx.md
```

## git 查看暂存区中的文件

```
git ls-files
```
---
参数|	说明
-|-
--cached |显示暂存区中的文件，git ls-files命令默认的参数
-c|	--cached的简写
--deleted|	显示删除的文件
-d|	-deleted的简写
--modified|	显示修改过的文件
-m|	--modified参数的简写
--other|	显示没有被git跟踪的文件
-o|	--other的简写
--stage|显示mode以及文件对应的Blob对象，进而我们可以获取暂存区中对应文件里面的内容。
-s|	--stage简写
---

查看修改内容
```
$ git ls-files -s
100644 d33a04b426ec047748c62b8c625b73786ea81c2f 0	readme.md
# 命令显示版本库对象的内容、类型及大小信息 -p 用于友好的显示内容
git cat-file -p d33a04b426ec047748c62b8c625b73786ea81c2f
```
## git 提交忽略文件

一种方式是每次提交的时候只提交指定的文件和目录
另一种方式是使用`.gitignore`文件

`.gitignore`忽略优先级 (由高到低)
* 从命令行中读取可用的忽略规则
* 当前目录定义的规则
* 父级目录定义的规则，依次递推
* $GIT_DIR/info/exclude 文件中定义的规则
* core.excludesfile中定义的全局规则

`.gitignore`文件的语法规则
* 空格不匹配任意文件，可作为分隔符，可用反斜杠转义
* #开头的文件标识注释，可以使用反斜杠进行转义
* ! 开头的模式标识否定，该文件将会再次被包含，如果排除了该文件的父级目录，则使用 ! 也不会再次被包含。可以使用反斜杠进行转义
* / 结束的模式只匹配文件夹以及在该文件夹路径下的内容，但是不匹配该文件
* / 开始的模式匹配项目根目录
* 如果一个模式不包含斜杠，则它匹配相对于当前 .gitignore 文件路径的内容，如果该模式不在 .gitignore 文件中，则相对于项目根目录
* ** 匹配多级目录，可在开始，中间，结束
* ? 通用匹配单个字符
* [] 通用匹配单个字符列表

`.gitignore`语法示例
* bin/: 忽略当前路径下的bin文件夹，该文件夹下的所有内容都会被忽略，不忽略 * bin 文件
* /bin: 忽略根目录下的bin文件
* /*.c: 忽略 cat.c，不忽略 build/cat.c
* debug/*.obj: 忽略 debug/io.obj，不忽略 debug/common/io.obj 和 * tools/debug/io.obj
* **/foo: 忽略/foo, a/foo, a/b/foo等
* a/**/b: 忽略a/b, a/x/b, a/x/y/b等
* !/bin/run.sh: 不忽略 bin 目录下的 run.sh 文件
* *.log: 忽略所有 .log 文件
* config.php: 忽略当前路径的 config.php 文件

`.gitignore`规则不生效  
`.gitignore`文件只能忽略没有被提交过的文件，如果某些文件已经被纳入了版本管理，则需要先把本地缓存删除,再提交
```
git rm -r --cached
```

## git 提交修改至仓库

将暂存区中提交的修改提交到仓库，为存入暂存区的修改不会提交
```
git commit -m '提交说明'
```
将本地修改及暂存区中的修改提交至仓库 等同于执行了`git add .`和`git commit -m ''`两条命令 
```
git commit -am '将本地修改及暂存区中的修改提交至仓库'
git commit -a -m '将本地修改及暂存区中的修改提交至仓库'
```

## git 拉取远程仓库

常规操作
```
git pull
# pull 等于 fetch+merge 
```

```
git fetch
```
## 回滚远程仓库

【远程代码库回滚】：

这个是重点要说的内容，过程比本地回滚要复杂

应用场景：自动部署系统发布后发现问题，需要回滚到某一个commit，再重新发布

原理：先将本地分支退回到某个commit，删除远程分支，再重新push本地分支

操作步骤：

1、git checkout master // 切换到目标分支

2、git pull // 从远处仓库拉去分支最新状态

3、git branch master_backup //备份一下这个分支当前的情况

4、git reset --hard the_commit_id //把the_branch本地回滚到the_commit_id

5、git push origin :master //删除远程 master 这个方法我报错了， 其实质是用一个空的分支去覆盖远程分支 git push origin [本地分支]:[远程分支]
// 这里应该要用 git push -f origin master才能覆盖上去

6、git push origin master //用回滚后的本地分支重新建立远程分支

7、git push origin :master_backup //如果前面都成功了，删除这个备份分支

8、git fetch --all && git reset --hard origin/master && git pull // 从远程仓库拉取强制覆盖本地仓库



## 合并两次存在冲突的commit

A修改了change.html文件,并提交推送至远程仓库
B修改了change.html文件,并提交,但是推送失败了.

无法正常push和pull

pull的时候错误信息提示自动合并失败，需要手工合并  
此时需要执行`git fetch`
再执行`git merge`命令
执行`merge`命令后会将两次commit的内容都合并到冲突文件上
此时因为无法自动合并
需要对冲突的文件进行手工修改  
再执行`git add git commit`重新提交合并后的代码


## 比较文件差异

比较本地的readme.txt文件和仓库中的差异
```
git diff HEAD –- readme.txt
```

## 恢复单个文件

讲readme.txt恢复到最近一次add或commit之前
```
git checkout –- readme.txt
```

## git 回滚

把readme.txt在暂存区的修改取消掉
```
git reset HEAD readme.txt
```

## 暂存本地修改

本地修改文件后未commit,此时需要拉去远程仓库更新出现冲突,
则可以使用`git stash`暂存本地修改
然后再`git pull` 同步远程仓库到本地
再`git stash pop`把最近一次暂存的本地修改还原至文件

查看stash列表
```
git stash list
```
删除stash
git stash clear // 清空所有的记录
git stash drop // 删除最早的一条记录
git stash drop stash@{1} // 删除指定标号为1的记录
```

## 克隆仓库

```
git clone https:://repo
```

```
git clone -b [分支名称] repo
```


















