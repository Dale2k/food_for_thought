const sequelize = require("../config/connection");
const { User, Dish } = require("../models");

const userData = require("./userData.json");
const dishData = require("./dishData.json");

const seedDatabase = () => {
  return sequelize.sync({ force: true }).then(() => {
    User.bulkCreate(userData).then(() => {
      Dish.bulkCreate(dishData).then(() => {
        console.log("All Seeds Planted");
      });
    });
  });

  process.exit(0);
};

seedDatabase();
