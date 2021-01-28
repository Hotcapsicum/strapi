简单说明，windows系统下sqlite的安装是个大问题
所以启动项目时，可以直接npx create-strapi-app my-project 就行了，然后自行选择数据库

在项目里创建表结构，对应的代码会自动添加，这里需要注意的是怎么样查询数据

这是一个简单说明

```
let sql_request = {
            _where: [{web_type:params.web_type, type_detail: params.type_detail}],
            _start: (params.page - 1)*params.page_size,
            _limit: params.page_size, 
            _sort: _score
        }
const result = await strapi.query('web-sites').find(sql_request)
```
