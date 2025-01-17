# Используем Node.js 22.11.0
FROM node:22.11.0 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости с Yarn
RUN yarn install

# Копируем остальные файлы проекта
COPY . .

# Строим проект
RUN yarn build

# Для продакшн-сервера используем Nginx
FROM nginx:alpine

# Копируем собранные файлы из build этапа в директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт 80 для Nginx
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
