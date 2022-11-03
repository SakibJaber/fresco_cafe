const router = require("express").Router();

const homeRoute = require("./homeRoute");
const adminRoute = require("./adminRoute");

const api = process.env.API_URL;

router.use(`/`, homeRoute);
router.use(`${api}`, adminRoute);

module.exports = router;
