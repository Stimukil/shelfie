const express = require('express')
const cors = require('cors')

const app = express()
PORT = 3456

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

app.use(expess.json())
app.use(cors())