require("dotenv").config();
const express = require("express")
const massive = require("massive")
const cors = require("cors")
const app = express();

app.use(expess.json())
app.use(cors())

app.get("/api/inventory", ctrl.getInventory)

app.put("/api/product", ctrl.putInventory)

app.post("/api/product", ctrl.postInventory)


PORT = 3456

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
