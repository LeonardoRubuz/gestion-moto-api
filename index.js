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
const LocalStrategy = require('./config/passport');
const { findUserByMailOrPhone } = require('./database/requests');
const checkUserAuthenticated = require('./middlewares/checkUserAuthenticated');


// Configurations
dotenv.config()
passport.use(LocalStrategy)
const port = process.env.PORT 

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (identifier, done) => {
    const user = await findUserByMailOrPhone(identifier, identifier);
    if (user) {
        done(null, user);
    }
    done({ message : "User doesn't exist" }, false)
});


// Middlewares
server.use(cors())
server.use(express.json())
server.use(passport.initialize())

// Api Router 
const apiRouter = express.Router();
apiRouter.use(checkUserAuthenticated)

// Main route
apiRouter.get("/", (req, res) => {
    res.send("API de gestion de motos")
})

// Routers
apiRouter.use("/associations", associationRouter);
apiRouter.use("/contributions", contributionRouter);
apiRouter.use("/programs", programRouter);
apiRouter.use("/permissions", permissionRouter);
apiRouter.use("/contribution-types", contribTypeRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/profiles", profileRouter);
apiRouter.use("/payments", paymentRouter);

server.use(authRouter)
server.use("/api", apiRouter)


server.listen(port, () => {
    console.log(`Server listening on port : ${port}`);
})