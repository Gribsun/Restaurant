const router = require("express").Router();

const { Table, Check, Dish } = require("../db/models");

router
    .route("/")
    .get(async (req, res) => {
        try {

            const dishes= await Dish.findAll({
                order: [["cost", "DESC"]],
            });

            res.json(dishes);

        } catch (err) {
            console.log(err);
        }
    })

module.exports = router;
