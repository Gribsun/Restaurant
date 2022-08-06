# Restaurant

npx sequelize model:generate --name Table --attributes name:string
npx sequelize model:generate --name Check --attributes tableId:integer,foodId:integer,quantity:integer
npx sequelize model:generate --name Food --attributes name:string,cost:integer
