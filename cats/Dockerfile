# Используем Node.js 22.11.0
FROM node:22.11.0

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

# Открываем порт 5173 (по умолчанию для Vite)
EXPOSE 5173

# Запускаем проект с Vite в режиме разработки
CMD ["yarn", "dev"]
