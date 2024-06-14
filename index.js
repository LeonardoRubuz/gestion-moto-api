const express =  require('express');
const server = express();
const cors = require('cors')
const dotenv = require('dotenv');
const passport = require('passport');
const programRouter = require('./routes/programs')
const associationRouter = require('./routes/associations')
const contributionRouter = require('./routes/contributions')

// Configurations
dotenv.config()
const port = process.env.PORT ||  5000;
const host = process.env.HOST ||  "127.0.0.1";

// Middlewares
server.use(cors())
server.use(express.json())

// Main route
server.get("/", (req, res) => {
    res.send("API de gestion de motos")
})

// Routers
server.use("/associations", associationRouter)
server.use("/contributions", contributionRouter)
server.use("/programs", programRouter)

server.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
})