const S = require("sequelize");
const db = require("../db/db");

class User extends S.Model {}

User.init({
  name: {
    type: S.STRING,
    allowNull: false,
  },
  ID: {
    type: S.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Id already in use!'
    }
  },
  address: {
    type: S.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: S.STRING,
    allowNull: false,
  },
  email: {
    type: S.STRING,
    allowNull: false,
    isEmail: true,
    unique: {
      args: true,
      msg: "Email address already in use!"
    }
  }
}, {
  sequelize: db,
  modelName: "user"
});

module.exports = User;





// module.exports = (sequelize, Sequelize) => {
//     const User = sequelize.define('user', {
//         email: {
//             type: Sequelize.STRING
//         }
//     })
//     return User
// }