
# git操作命令

## vuepress

这里是提交vuepress的dist目录到page的命令记录，复制粘贴省的麻烦.  

因为不打算把这个目录下的文件也保存到git中，所以不使用subtree  
```
vuepress build && cd .vuepress/dist && git init && echo /public > .gitignore && git add -A && git commit -m 'pages' && git push -f https://github.com/DongDavid/vuepress.git master:gh-pages
```

## 误提交如何撤销

1. 如果不小心执行了add . 想要撤销就用`git reset --mixed` 
文件退出暂存区，但是不改变文件软

2. 删除暂存区中某些文件

`git rm --cached [filenames]`

## subtree

推送的时候将dist目录下的内容推送到特定分支

```
git subtree push --prefix dist origin gh-pages
```

## add 

### git add .   

他会监控工作区的状态树，使用它会把工作时的所有变化提交到暂存区，包括文件内容修改(modified)以及新文件(new)，~~但不包括被删除的文件~~(会提交文件的删除操作的)。  


### git add -u  

他仅监控已经被add的文件（即tracked file），他会将被修改的文件提交到暂存区。add -u 不会提交新文件（untracked file）。（git add --update的缩写）

### git add -A  

是上面两个功能的合集（git add --all的缩写）
