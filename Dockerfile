FROM  node:lts

WORKDIR /vendas-online

COPY . .

RUN rm -rf node_modules

RUN npm i 

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000