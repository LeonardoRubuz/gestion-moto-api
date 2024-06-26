const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return null;
    }
}

module.exports = verifyToken;const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return null;
    }
}

module.exports = verifyToken;
