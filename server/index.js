require("dotenv").config();
const express = require("express")
const massive = require("massive")
const cors = require("cors")
const app = express();

app.use(expess.json())
app.use(cors())

app.get("/api/inventory", ctrl.getInventory)

app.post("/api/inventory", ctrl.putInventory)

app.


PORT = 3456

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
