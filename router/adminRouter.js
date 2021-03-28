const express = require("express");
const { isAdmin } = require("../controllers/adminController");


const { auth ,admin} = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/",auth,admin,isAdmin)

module.exports = router;
