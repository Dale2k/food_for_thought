const router = require('express').Router();
const projects = require("./projectRoutes");
const projects = require("./userRoutes");

router.use('/projects', projects);
router.use('/users', users);

module.exports = router;