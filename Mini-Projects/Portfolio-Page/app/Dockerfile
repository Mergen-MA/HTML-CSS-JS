# FROM nginx:latest

# COPY . /usr/share/nginx/html

# WORKDIR /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# ---------------------------------------------------

FROM node:alpine

WORKDIR /webapp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]