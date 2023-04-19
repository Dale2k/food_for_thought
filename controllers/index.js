const router = require("express").Router();

// const apiRoutes = require('./api');
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;


// GET all paperback books
router.get('/paperbacks', (req, res) => {
  Book.findAll({
    // Order by title in ascending order
    order: ['title'],
    where: {
      // Only get books that have this boolean set to TRUE
      is_paperback: true
    },
    attributes: {
      // Don't include these fields in the returned data
      exclude: ['is_paperback', 'edition']
    }
  }).then((projectData) => {
    res.json(projectData);
  });
});