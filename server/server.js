require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./db/models");

const app = express();

const checkRouter = require('./routes/check.router')
const tableRouter = require('./routes/table.router')
const dishRouter = require('./routes/dish.router')

app.use('/static', express.static(__dirname + '/public'));

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/check", checkRouter);
app.use("/tables", tableRouter);
app.use("/dishes", dishRouter);

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log(`Server has been started on PORT: ${PORT}`);
        console.log("There is a connection to the database");
    } catch (error) {
        console.error("No connection to the database", error.message);
    }
});
