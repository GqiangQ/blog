# 初始代码
创建dopcker
~~~
mkdir blog-data
docker  run --name postgresql  -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_PASSWORD=blog -d postgres:12.2
~~~

## 开发

```bash
yarn dev
# or
npm run dev
```

## 部署

```bash 
yarn build
yarn start
```
创建表
m:create -n xxxx

运行命令创建表
yarn m:run

\l 查看库
\c xxx 查看表内容
\dt 查看 表的内容

