# Vue3 with antd4 admin skeleton

基于vue3、antd4集成的后台管理系统，开箱即用


## 环境变量
应用运行时默认会加载项目中的`.env`和`.env.production`配置文件。默认的`.env.example`配置可以作为原始开发配置，最佳实践：

- 开发时请配置`.env`
- 生产时请配置`.env.production`

### https
应用支持https，需要配置对应的证书，如：

- SSL_CERTIFICATE_KEY=/Users/certificates/domain.cc.key
- SSL_CERTIFICATE=/Users/certificates/domain.cc.crt

在配置了以上配置后，应用会自动变成https


### 多语言
项目默认支持`zh`和`en`两种语言，可自行参考配置

## 开发
应用默认支持以下脚本：
```sh
# 开发环境
pnpm dev

# 打包
pnpm build
```

## 部署
项目中默认包含了`Dockerfile`和`.gitlabe-ci.yml`配置文件，可以在此基础上进行部署；若传统部署可直接执行`pnpm start`

## 相关项目

- [Vue2 + TS + Antd2.x 🔗](https://vue2-admin.usword.cn)
- [Vue3 + TS + Antd4 🔗](https://vue3-admin.usword.cn)
- [Vue3 + TS + NestJS + Antd4(BFF架构) 🔗](https://github.com/ihengshuai/vue3-admin-skeleton/tree/template_nest)
- [React Hooks + Redux + Ant Design5 🔗](https://github.com/ihengshuai/react-hooks-admin/tree/template_redux)
- [React Hooks + Mobx + Ant Design5 🔗](https://github.com/ihengshuai/react-hooks-admin/tree/template_mobx)