const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {
        email : user.email,
        id : user.id,
        phone : user.phone1
    }
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn : Date.now() + 10 * 60 * 1000
    })
}

module.exports = generateToken;