const express = require("express")
const router = express.Router()

//importing controllers 
const { home } = require("../controllers/homeController")

router.route('/').get(home)

module.exports = router;