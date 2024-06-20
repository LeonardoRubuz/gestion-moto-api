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
const { findUserByMailOrPhone } = require('./database/requests');

// Configurations
dotenv.config()
passport.use(CustomStrategy)
const port = process.env.PORT ||  5000;
const host = process.env.HOST ||  "127.0.0.1";

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async ({email, phone}, done) => {
    const user = await findUserByMailOrPhone(email, phone);
    if (user) {
        done(null, user);
    }
    done({ message : "User doesn't exist" }, false)
});

// Middlewares
server.use(cors())
server.use(express.json())

// Api Router 
const apiRouter = express.Router();

// Main route
apiRouter.get("/", (req, res) => {
    res.send("API de gestion de motos")
})

// Routers
apiRouter.use(authRouter);
apiRouter.use("/associations", associationRouter);
apiRouter.use("/contributions", contributionRouter);
apiRouter.use("/programs", programRouter);
apiRouter.use("/permissions", permissionRouter);
apiRouter.use("/contribution-types", contribTypeRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/profiles", profileRouter);
apiRouter.use("/payments", paymentRouter);


server.use("/api", apiRouter)

server.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
})