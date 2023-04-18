const sequelize = require("../config/connection");
const Project = require("../models/Project");

// const userData = require('./userData.json');
const projectData = require("./{ } projectData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const project of projectData) {
    await Project.create({
      ...project,
      // user_id: user[Math.floor(Math.random() * project.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
