const router = require("express").Router();

const { Table } = require("../db/models");

router
    .route("/")
    .get(async (req, res) => {
        try {
            const tables = await Table.findAll({
                attributes: ['id', 'name'],
                order: [["createdAt", "DESC"]],
            });

            res.json(tables);

        } catch (err) {
            console.log(err);
        }
    })

router
    .route("/:id")
    .get(async (req, res) => {
        try {
            const {id} = req.params;

            const table = await Table.findOne({
                attributes: ['id', 'name'],
                where: {
                    id: id
                }
            });

            res.json(table);
        } catch (err) {
            console.log(err);
        }
    })

module.exports = router;
