const router = require("express").Router();
const projects = require("../../models/Project");
const users = require("../../models/User");

router.use("/projects", projects);
router.use("/users", users);

module.exports = router;
