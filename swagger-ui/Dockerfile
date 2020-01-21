FROM node:10-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN git clone https://github.com/swagger-api/swagger-ui.git -b v3.25.0 --depth 1
WORKDIR /swagger-ui
RUN npm install
