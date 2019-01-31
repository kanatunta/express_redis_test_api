# Simple RESTfull api with Redis

## _To start_

### From Docker repo

1 docker pull @repo-name  
2 docker run -d -p 80:3000 @repo-name  
3 docker container rm @repo-name -f

### From terminal

1 install redis  
2 npm install  
3 npm run  

## To test need Postman

1 create post request

```
http://localhost/addUserInfo

```

1.1 body raw data - json format

```
{
    "id" : "root",
    "first_name" : "Rodrick",
    "second_name" : "Paterson",
    "email" : "rpaterson@gmial.com"
}
```

1.2 test with get request

```
http://localhost/userInfo/root

```

2 create get request

```
http://localhost/userInfo/root

```

3 create patch request

```
http://localhost/updateUserInfo

```

3.1 body raw data - json format

```
{
    "id" : "root",
    "first_name" : "Rodrick",
    "second_name" : "Gach",
    "email" : "rgach@gmial.com"
}
```

3.2 test with get request

```
http://localhost/userInfo/root

```

4 create delete request

```http://localhost/deleteUserInfo/root

```

4.1 test with get request

```http://localhost/userInfo/root

```
