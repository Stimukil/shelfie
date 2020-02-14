const axios = require ('axios');
const express = require ('express');
const dashboard = {}

module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        let inventory = await db.getInventory().catch(err => res.status(500).send(err))

        res.status(200).send("this is a dumpster fire")
    },
    
    postInventory = () => {
        axios.post("/api/inventory").then(res => this.setState({inventory: res.data}))
    },

    putInventory: (req, res) => {
        
        res.status(200).send(inventory)
    }

}