const express = require("express");
const router = express.Router();
const attachementController = require("../controller/AttachementController");
const multer = require("../middleware/file.config");
router.post("/", multer, attachementController.saveFile);
module.exports = router;
