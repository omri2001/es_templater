FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install
EXPOSE 5173

CMD ["pnpm", "run", "dev"]