const express =  require('express');
const server = express();
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const authRouter = require('./routes/auth');
const associationRouter = require('./routes/associations');
const contributionRouter = require('./routes/contributions');
const permissionRouter = require('./routes/permissions');
const programRouter = require('./routes/programs');
const contribTypeRouter = require('./routes/type-contributions');
const userRouter = require('./routes/users');
const profileRouter = require('./routes/profiles')
const paymentRouter = require('./routes/payments');
const CustomStrategy = require('./config/passport');

// Configurations
dotenv.config()
passport.use(CustomStrategy)
const port = process.env.PORT 

// Middlewares
server.use(cors())
server.use(express.json())

// Main route
server.get("/", (req, res) => {
    res.send("API de gestion de motos")
})

// Routers
server.use(authRouter);
server.use("/associations", associationRouter);
server.use("/contributions", contributionRouter);
server.use("/programs", programRouter);
server.use("/permissions", permissionRouter);
server.use("/contribution-types", contribTypeRouter);
server.use("/users", userRouter);
server.use("/profiles", profileRouter);
server.use("/payments", paymentRouter);


server.listen(port, () => {
    console.log(`Server listening on port : ${port}`);
})