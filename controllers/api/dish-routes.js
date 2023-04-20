const router = require("express").Router();
const { Dish, User } = require("../../models");
// const withAuth = require("../utils/auth");

//GET all projects
// api/dishes
router.get("/", (req, res) => {
  // Get all projects from the projects table
  Dish.findAll().then((dishData) => {
    res.json(dishData);
  });
});

// GET a single project
//api/projects
router.get("/:id", (req, res) => {
  // Find a single project by its primary key (id)
  Dish.findByPk(req.params.id).then((dishData) => {
    res.json(dishData);
  });
});

// CREATE a project
//api/projects
router.post("/", async (req, res) => {
  try {
    const dishData = await Dish.create({
      dish_name: req.body.dish_name,
      description: req.body.description,
      guest_name: req.body.guest_name,
      rating: req.body.rating,
    });
    res.status(200).json(dishData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates book based on the guest_name
router.put("/:id", async (req, res) => {
  // Where is this action method sending the data from the body of the fetch request? Why?
  // It is sending the data to the Model so that one dish can be updated with new data in the database.
  try {
    const dish = await Dish.update(
      {
        dish_name: req.body.dish_name,
        description: req.body.description,
        guest_name: req.body.guest_name,
        rating: req.body.rating,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // If the database is updated successfully, what happens to the updated data below?
    // The updated data (dish) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete route for a project with a matching name
router.delete("/:id", (req, res) => {
  // Looks for the project based on name given in the request parameters and deletes the instance from the database
  Dish.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedDish) => {
      res.json(deletedDish);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
