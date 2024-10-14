FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
COPY template.env ./.env

# Install dependencies
RUN npm install
RUN npm install -g next

COPY ./ ./

RUN npm run build

ENTRYPOINT ["npm", "start"]