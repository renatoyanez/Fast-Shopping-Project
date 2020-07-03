const S = require("sequelize");
const db = require("../db/db");

class Category extends S.Model {}

Category.init(
  {
    name: {
      type: S.STRING,
      allowNull: true,
    }
  },
  { sequelize: db, modelName: "categories" }
);


module.exports = Category;
