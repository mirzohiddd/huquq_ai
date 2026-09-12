# Railway shu Dockerfile bilan build qiladi (railway.json → builder: DOCKERFILE).
# Servisning "Root Directory" sozlamasi `backend` bo'lishi shart — aks holda
# monorepo ildizida Dockerfile topilmaydi.
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

# routes/chat.js yuklangan fayllarni shu papkaga yozadi. `uploads` .gitignore'da
# bo'lgani uchun repozitoriyda mavjud emas — konteynerda o'zimiz yaratamiz.
RUN mkdir -p uploads

# Railway haqiqiy portni PORT o'zgaruvchisi orqali beradi; server.js uni
# o'qiydi (`process.env.PORT || 3000`). EXPOSE faqat hujjat sifatida.
EXPOSE 3000

CMD ["node", "server.js"]
