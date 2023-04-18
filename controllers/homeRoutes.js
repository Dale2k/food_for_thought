const router = require("express").Router();
const { Project, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  // Get all projects and JOIN with user data
  const projectData = await Project.findAll().catch((err) => {
    res.json(err);
  });
  const projects = projectData.map((project) => project.get({ plain: true }));
  res.render("homepage", { projects });
});

router.get("/project/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id);
    if (!projectData) {
      res.status(404).json({ message: "No food with this id" });
      return;
    }

    const project = projectData.get({ plain: true });

    res.render("project", project);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// router.get("/profile", withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ["password"] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render("profile", {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/login", (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect("/profile");
//     return;
//   }

//   res.render("login");
// });

module.exports = router;
