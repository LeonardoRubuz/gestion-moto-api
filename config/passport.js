const bcrypt = require('bcrypt');
const custom = require('passport-custom')
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient;

const CustomStrategy = new custom.Strategy(
    async (email, phone, password, done) => {
        try {
            const user = await prisma.utilisateur.findUnique({
                where : {
                    OR : [
                        { email : email },
                        { phone1 : phone}
                    ]
                }
            });
            if (!user) {
                return done(null, false);
            }
            bcrypt.compare(password, user.password, (error, isMatch) => {
                if (error) {
                    return done(null, false, error);
                }
                if (!isMatch) {
                    return done(null, false, { message : "Password Incorrect" });
                }
                return done(null, user);
            });
        } catch (error) {
            res.status(500).send("Authentication error");
        }
    }
)

module.exports = CustomStrategy