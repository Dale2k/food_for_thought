const router = require("express").Router();
const { User, Project } = require("../../models");
// const withAuth = require("../utils/auth");

//GET all Users
// api/users
router.get("/", (req, res) => {
  // Get all projects from the projects table
  User.findAll().then((userData) => {
    res.json(userData);
  });
});

// GET a single user
//api/user
router.get("/:id", (req, res) => {
  // Find a single project by its primary key (id)
  User.findByPk(req.params.id).then((userData) => {
    res.json(userData);
  });
});

// CREATE a user
//api/projects
router.post("/", (req, res) => {
  User.create(req.body)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Updates user based on the name
router.put("/:email", (req, res) => {
  // Calls the update method on the Project model
  User.update(
    {
      // All the fields you can update and the data attached to the request body.
      name: req.body.name,
      email: req.body.email,
    },
    {
      // Gets the project based on the isbn given in the request parameters
      where: {
        email: req.params.email,
      },
    }
  )
    .then((updatedUser) => {
      // Sends the updated project as a json response
      res.json(updatedUser);
    })
    .catch((err) => res.json(err));
});

// Delete route for a project with a matching name
router.delete("/:email", (req, res) => {
  // Looks for the project based on name given in the request parameters and deletes the instance from the database
  User.destroy({
    where: {
      email: req.params.email,
    },
  })
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
