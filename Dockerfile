FROM node:8.12.0

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY / /app/

CMD ["npm", "start"]
