## 仿最右APP



### 前言

<font color=#00FA9A size=2 face="微软雅黑">
最右，专治不开心，是一款汇集各种幽默搞笑话题的APP。
</font>

在最右，你可以不停刷出最精彩的新热内容，关注自己感兴趣的话题，与脑洞大开的右友互动，找到自己的同爱同好。

最右有很多新奇的功能，可以分析用户的兴趣爱好，帮助你找到喜欢的内容和人。自从我下载了这款软件，不仅为我的生活添加了许多乐趣，还收获了满满的正能量。因此，我想用Vue仿照最右写这样一个项目，希望对看到想学或者正在写此类项目的人有所帮助。

##### 注：此项目纯属个人瞎搞，正常下载请选择最右官方客户端。

### 目标功能介绍

<font color=#DDA0DD size=2 face="微软雅黑">
涉及注册、登录、关注、推荐、视频、图文、话题、私信、动态、消息、个人中心等等，是一个完整的流程。 
</font>

### 技术栈

<font color=#2196F3 size=2 face="微软雅黑">
vue + vue-cli + vuex + vue-router + vue-axios + webpack + ES6 + fetch + sass + flex + svg + git
</font>

### ui 框架的整合

framework7

  
### 项目运行

```
git@github.com:liyingyingweb/zuiyou.git

npm install

npm run serve

npm run build

```

### 说明

如果对您有帮助，您可以点右上角<font color=#ff0000 size=2 face="微软雅黑"> "Star"</font> 支持一下 谢谢！

如果有想要从基础学习 vue 的朋友，这个 demo 可以让你了解更好的学习 vue ，非常适合入门练习。

### 最终目标

1、用 node.js 构建好应用到的接口

2、用清晰思路 将目标功能一一实现

### 效果演示

移动端扫描下方二维码：

![](https://user-gold-cdn.xitu.io/2019/8/26/16ccb880eb2aece8?w=287&h=285&f=png&s=6471)

pc 端演示：

http://oano.cn/lyy/

可下载安装包：

https://service.dcloud.net.cn/build/download/4ff7aa60-ca29-11e9-84a2-e92f6efc027e


### 项目布局

```key

|—— dist                                        //项目打包生成文件
|—— node_modeules                               //依赖
|—— public                                      //公共文件
|—— src                                         //源码目录 
|   |—— assets                                  //项目图片
|   |—— components                              //组件
|   |—— css                                     //样式
|   |—— fonts                                   //Framework7文件
|   |—— js                                      //js文件
|   |—— pages
|   |—— views
|   |   |—— mostRight                           
|   |   |   |—— index.vue                       //最右首页
|   |   |—— dynamic
|   |   |   |—— index.vue                       //动态页
|   |   |—— release
|   |   |   |—— index.vue                       //发布页
|   |   |—— news
|   |   |   |—— index.vue                       //消息页
|   |   |—— my
|   |   |   |—— index.vue                       //个人中心页
|   |—— App.vue                                 //首页入口文件
|   |—— main.js                                 //程序入口文件，加载各种公共组件
|   |—— routes.js                               //路由
|   ├── store.js                                // vuex的状态管理;路由配置
|—— index                                       //入口html文件
|—— .gitignore                                  //忽略文件
|—— package.json                                //json文件
|—— README.md                                   //说明文档
|—— vue.config.js                               //配置文件

 ```



