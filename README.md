# 启动前端服务

1. 安装依赖

   `yarn (or npm install)`

2. 前端项目打包后放在`./dist/`目录下

3. 启动服务

   `yarn start (or npm run start)`

   可以通过`pm2`启动

   `pm2 start server.js --name=project-name --watch`



防止`history`模式路由的项目页面刷新时，页面找不到的问题