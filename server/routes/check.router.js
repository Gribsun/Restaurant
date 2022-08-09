const router = require("express").Router();

const { Check } = require("../db/models");

router
    .route("/")
    .post(async (req, res) => {
        try {
            const {id, count, tableId} = req.body;

            const newCheck = await Check.create({
                tableId: tableId,
                dishId: id,
                quantity: count,
            });

            return res.json(newCheck);

        } catch (err) {
            console.log(err);
        }
    })

router
    .route("/:tableId")
    .get(async (req, res) => {
        try {
            const {tableId} = req.params;

            if (tableId) {
                const check = await Check.findAll({
                    where: {
                        tableId: tableId,
                    }
                });
                res.json(check);
            }

            res.end();
        } catch (err) {
            console.log(err);
        }
    })
    .post(async (req, res) => {
        try {
            const {id} = req.params;
            if (id) {
                const findCheck = await Check.findOne({
                    where: {
                        dishId: id
                    }
                });
                findCheck ? res.json(true) : res.json(false);
            }
            res.end();
        } catch (err) {
            console.log(err);
        }
    })
    .delete(async (req, res) => {
        try {
            const {tableId} = req.params;

            await Check.destroy({ where: { tableId } });
            await res.sendStatus(200);

        } catch (err) {
            console.log(err);
        }
    })

module.exports = router;
