# 创建数据库
 docker run -v  F:\blog\blog-data:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_PASSWORD=blog --name postgresql 1f1bd4302537
# 进入容器
docker exec -it 容器id bash

# 进入数据库
 psql -U xxx -P xxx
创建数据库：  create database blog_development encoding 'UTF8';
 ··查看表: \l
 删库：  drop database xxx库名;
 