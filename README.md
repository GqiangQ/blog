# 创建数据库
docker run -v f:xxx/xxx: /var/lib/postersql/data -p 5432:5432 -e POSTGRES_USER=xxx -e POSTRGRES_PASSWORD=XXX --nane xxx id(imagesid)

# 进入容器
docker exec -it 容器id bash

# 进入数据库
 psql -U xxx -P xxx
创建数据库：  create database blog_development encoding 'UTF8';
 ··查看表: \l
 删库：  drop database xxx库名;
 