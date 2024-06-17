const passport = require("passport");

const authMiddleware = (req, res, next) => {
    passport.authenticate('custom', (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({error : 'Incorrect credentials'})
        }
        res.status(200).json({
            message: 'User authenticated',
            user: user
        })
    })(req, res, next)
}

module.exports = authMiddleware;