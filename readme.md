# _To start_  

1 With binding volumes  
**docker run --rm -it -v @full_project_path:/usr/src/fromwin -p 80:3000 kanatunta/myredis:lates**  
2 Without binding volumes

* clone repo
* install docker  
* run from terminal:  
  **docker run --rm -it -p 80:3000 kanatunta/myredis:latest**  

3 To start without docker
* install [**redis**](https://redis.io/) and run redis-server
* git clone @repo
* cd @project-dir
* npm install
* npm start
* localhost:3000 and voala

