const verifyToken = require("../lib/verifyToken");

const checkUserAuthenticated = (req, res, next) => {
    const headerAuthorization = req.headers['authorization'];
    const token = headerAuthorization?.replace('Bearer ', '');
    const user = verifyToken(token);

    if (user) {
        req.user = user;
        return next();
    } else {
        res.status(403).json({
            err : "Please log in"
        })
    }
}

module.exports = checkUserAuthenticated;