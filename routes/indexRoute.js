const router = require("express").Router();

const homeRoute = require("./homeRoute");
const menuRoute = require("./menuRoute");
const chefRoute = require("./chefRoute");
const contactRoute = require("./contactRoute");
const blogRoute = require("./blogRoute");
const aboutRoute = require("./aboutRoute");
const reservationRoute = require("./reservationRoute");

router.use(`/`, homeRoute);
router.use(`/menu`, menuRoute);
router.use(`/chef`, chefRoute);
router.use(`/contact`, contactRoute);
router.use(`/blog`, blogRoute);
router.use(`/about`, aboutRoute);
router.use(`/reservation`, reservationRoute);

// DASHBOARD
const { isAuthenticated } = require("../middleware/authMiddleware");

const authRoute = require("./authRoute");
const adminRoute = require("./adminRaute");
const adminProfile = require("./adminProfile");
const adminBlogRoute = require("./adminBlogRoute");
const adminMenuRoute = require("./adminMenuRoute");
const adminChefRoute = require("./adminChefRoute");
const adminReservationRoute = require("./adminReservationRoute");
const adminContactRoute = require("./adminContactRoute");

router.use(`/`, authRoute);
router.use(`/admin`, isAuthenticated, adminRoute);
router.use(`/admin`, isAuthenticated, adminProfile);
router.use(`/admin`, isAuthenticated, adminBlogRoute);
router.use(`/admin`, isAuthenticated, adminMenuRoute);
router.use(`/admin`, isAuthenticated, adminChefRoute);
router.use(`/admin`, isAuthenticated, adminReservationRoute);
router.use(`/admin`, isAuthenticated, adminContactRoute);

module.exports = router;
