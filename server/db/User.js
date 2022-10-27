const conn = require("./conn");
const { Sequelize } = conn;
const { STRING } = Sequelize;

const User = conn.define("user", {
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: { 
        notEmpty: true
    }
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  firstName: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = User;
