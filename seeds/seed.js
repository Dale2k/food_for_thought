const sequelize = require("../config/connection");
const { User, Project } = require("../models");

const userData = require("./userData.json");
const projectData = require("./projectData.json");

const seedDatabase = () => {
  return sequelize.sync({ force: true }).then(() => {
    User.bulkCreate(userData).then(() => {
      Project.bulkCreate(projectData).then(() => {
        console.log("All Seeds Planted");
      });
    });
  });

  process.exit(0);
};

seedDatabase();
