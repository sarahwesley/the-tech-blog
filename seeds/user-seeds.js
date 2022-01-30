const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: "sarahbeara",
        email: "sarah.davis2017@gmail.com",
        password: "123"
    },
    {
        username: "mysticsands",
        email: "saxophone.6@gmail.com",
        password: "1234"
    },
    {
        username: "jimmyjohns",
        email: "sarahiwesley@outlook.com",
        password: "12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;