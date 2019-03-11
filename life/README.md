# ant design

> 蚂蚁金融出的一个UI库，基于react

## pro版本
```
$ git clone --depth=1 https://github.com/ant-design/ant-design-pro.git my-project
$ cd my-project
$ npm install
$ npm run start
```
### 添加页面
新增页面需要在`src/common/router.js`中增加对应的路由
若页面需要出现在菜单上，则在`src/common/menu.js` 进行新增。
menu中的path对应的是router中的路由

路由新增后，在`routes/`目录下添加对应的页面文件  `template.js` 和对应的样式文件  `template.less`
### 路由说明
全局的路由关系是这样一个走向：src/index.js 中通过 app.router(require('./router').default);，将 src/router.js 绑定到 dva 实例的 router 方法上。而在 src/router.js 中又引入了 src/common/router.js 中的 getRouterData 作为数据源。