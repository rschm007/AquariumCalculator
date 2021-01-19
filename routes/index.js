const router = require('express').Router();
// const apiRoutes = require('./api');

// =====================
// VIEWS ROUTES
// =====================
router.get("/", function (req, res) {
  res.render("index");
});

router.get("*", function (req, res) {
  res.render("index");
});

// =====================
// API ROUTES
// =====================
// router.use('/api', apiRoutes);

module.exports = router;