# vue 移动端项目实训文档



## 项目技术栈和实训目的
- 1 vue+vuex+vue-router+vant-ui


- 2 市面上vuepc端 UI框架主要有 element-ui/iview等 移动端主要有Mint UI/vux/Vant/Cube UI/NutUI/ant design vue等 快速上手不同的UI框架，学会自己找文档解决问题是非常迫切的

  

## 如何运行示例代码

- 1 开启数据接口服务器（进入bee_quick目录）：`node app.js`


- 2 开启脚手架（进入axf2目录）：`yarn serve` 



## 实例代码文件夹目录说明

![](./img/1.bmp)




##  如何开始自己的项目

- 1.利用vue-cli初始化一个项目


- 2  选择如下的配置![选择如下的配置](./img/2.bmp)


- 3.配置路由什么的就不细说了


- 4.使用Jsonp跨域 文件在tools里



##  跨域及优化说明
- tools文件说明
- ![](./img/4.bmp)
- 发送请求优化说明(把axios添加到vue的原型上(在main.js中))![](./img/3.bmp)


## 项目接口说明
  - 接口 ：所有数据的接口
  - 接口地址：`http://localhost:3008/list`
  - 使用说明：需要通过 JSONP 方式来*跨域*获取数据


## vant-ui介绍
- 1 轻量、可靠的移动端 Vue 组件库

- 2 官网https://youzan.github.io/vant/#/zh-CN/intro


## 小坑
- 1 eslint校验字体图标文件会报错---解决办法 在项目根目录添加.eslintignore文件把字体图标js文件给忽略掉

















