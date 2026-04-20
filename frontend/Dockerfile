# Etapa 1 - build
FROM node:25 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa 2 - runtime
FROM node:25

WORKDIR /app

COPY --from=builder /app ./

CMD ["npm", "run", "start"]