FROM kanatunta/redisnodenginx:lates

ENV PATH /root/.nvm/versions/node/v11.8.0/bin/:${PATH}
ENV PATH /usr/local/bin/:${PATH}

WORKDIR /usr/src/fromwin

COPY package*.json ./

RUN  npm install  

COPY . .

EXPOSE 3000
EXPOSE 6379

CMD redis-server --daemonize yes --bind 0.0.0.0; npm start















