# # get the base image 
# FROM node:alpine

# #set the working dir 
# WORKDIR /usr/src/app

# # copy the package.json in working dir
# COPY package*.json ./

# # to install all dependecies in working dir set earlier
# RUN npm install

# # copy the whole code from here to docker working dir
# COPY . .

# # open port to run nodejs
# EXPOSE 5000

# # start application
# CMD ["npm", "start"]

FROM node:alpine

RUN apk --update --no-cache add tzdata bash curl \
    && cp /usr/share/zoneinfo/Asia/Kolkata /etc/localtime \
    && echo "Asia/Kolkata" > /etc/timezone \
    && apk del tzdata

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./app/package.json /usr/src/app/

RUN npm install --production --registry=https://registry.npm.taobao.org

COPY ./app /usr/src/app
COPY wait-for-it.sh /

# RUN npm run build

CMD /wait-for-it.sh db:3306 -- npm run docker
