FROM node:latest AS builder
WORKDIR /app
COPY public/ /public
COPY src/ /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD npm run dev



# FROM nginx:alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .
# EXPOSE 80
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
