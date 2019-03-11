# jkeyll

## 正则去除jkeyll的yam头部

头部示例
```
---
layout: home
title: 标题
---
```

```
^---(\s[\s\S]*?\s)---
```