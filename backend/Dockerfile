# Node version being used
FROM node:20-alpine

# Working folder
WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
