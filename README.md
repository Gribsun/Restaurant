# Restaurant

npx sequelize model:generate --name Table --attributes name:string
npx sequelize model:generate --name Dish --attributes name:string,cost:integer
npx sequelize model:generate --name Check --attributes tableId:integer,dishId:integer,quantity:integer
