const axios = require ('axios');
const dashboard = {}

module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        let inventory = await db.getInventory().catch(err => res.status(500).send(err))

        res.status(200).send("this is a dumpster fire")
    },

    pullInventory: (req, res) => {
        res.status(200).send(inventory)
    }

}