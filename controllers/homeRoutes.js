const router = require("express").Router();
const { Project, User } = require("../models");
// const withAuth = require("../utils/auth");

//GET all projects
router.get("/", (req, res) => {
  // Get all books from the book table
  Project.findAll().then((projectData) => {
    res.json(projectData);
  });
});

// GET a single project
router.get("/:id", (req, res) => {
  // Find a single project by its primary key (id)
  Project.findByPk(req.params.id).then((projectData) => {
    res.json(projectData);
  });
});

// CREATE a project
router.post("/", (req, res) => {
  Project.create(req.body)
    .then((newProject) => {
      res.json(newProject);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Updates book based on its isbn
// router.put("/:name", (req, res) => {
  // Calls the update method on the Project model
  // Project.update(
  //   {
      // All the fields you can update and the data attached to the request body.
    //   name: req.body.name,
    //   description: req.body.description,
    //   price: req.body.price,
    //   rating: req.body.rating,
    // },
    // {
      // Gets the project based on the isbn given in the request parameters
  //     where: {
  //       name: req.params.isbn,
  //     },
  //   }
  // )
  //   .then((updatedProject) => {
      // Sends the updated project as a json response
//       res.json(updatedProject);
//     })
//     .catch((err) => res.json(err));
// });

module.exports = router;
