FROM node:10
RUN mkdir -p /app
WORKDIR .
#COPY node_modules/ app/
COPY . /app
WORKDIR /app
RUN npm install --save --force
RUN npm install @material-ui/core --save
RUN npm run build
RUN ls
#COPY frontend/build /app
RUN yarn global add serve
#WORKDIR /build
CMD ["serve","-s","build","-p","8081"]
