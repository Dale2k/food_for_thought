const router = require("express").Router();
const { Project, User } = require("../../models");
// const withAuth = require("../utils/auth");

//GET all projects
// api/projects
router.get("/", (req, res) => {
  // Get all projects from the projects table
  Project.findAll().then((projectData) => {
    res.json(projectData);
  });
});

// GET a single project
//api/projects
router.get("/:id", (req, res) => {
  // Find a single project by its primary key (id)
  Project.findByPk(req.params.id).then((projectData) => {
    res.json(projectData);
  });
});

// CREATE a project
//api/projects
router.post("/", (req, res) => {
  Project.create(req.body)
    .then((newProject) => {
      res.json(newProject);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Updates book based on the guest_name
router.put("/:customer_name", (req, res) => {
  // Calls the update method on the Project model
  Project.update(
    {
      // All the fields you can update and the data attached to the request body.
      dish_name: req.body.dish_name,
      description: req.body.description,
      price: req.body.price,
      rating: req.body.rating,
      customer_name: req.body.customer_name,
    },
    {
      // Gets the project based on the isbn given in the request parameters
      where: {
        customer_name: req.params.customer_name,
      },
    }
  )
    .then((updatedProject) => {
      // Sends the updated project as a json response
      res.json(updatedProject);
    })
    .catch((err) => res.json(err));
});

// Delete route for a project with a matching name
router.delete("/:customer_name", (req, res) => {
  // Looks for the project based on name given in the request parameters and deletes the instance from the database
  Project.destroy({
    where: {
      customer_name: req.params.customer_name,
    },
  })
    .then((deletedProject) => {
      res.json(deletedProject);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
