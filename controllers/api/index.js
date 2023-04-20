const router = require("express").Router();
const dishRoutes = require("./dish-routes");
const users = require("./userRoutes");

router.use("/dish", dishRoutes);
router.use("/users", users);

module.exports = router;
