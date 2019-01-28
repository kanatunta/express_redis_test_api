FROM node

RUN wget http://download.redis.io/redis-stable.tar.gz && \
    tar xvzf redis-stable.tar.gz && \
    cd redis-stable && \
    make && \
    mv src/redis-server /usr/bin/ && \
    cd .. && \
    rm -r redis-stable && \
    npm install -g concurrently  

EXPOSE 6379

WORKDIR /usr/src/fromlin

COPY package*.json ./

RUN  npm install  

COPY . .

EXPOSE 3000
EXPOSE 6379

CMD concurrently "/usr/bin/redis-server --bind '0.0.0.0'" "sleep 5s; npm start"
















