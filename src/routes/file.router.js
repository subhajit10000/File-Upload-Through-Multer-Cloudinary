const express = require("express");
const upload = require("../config/multer.js");
const fileUpload = require("../utils/uploadFile.js");
const fs = require("fs");
const { log } = require("console");

const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    console.log(file);

    if (!file) {
      return res.status(400).json({ message: "file not found" });
    }
    const path = file.path;
    console.log(`Path: ${path}`);

    const uploadFile = await fileUpload("files", path);

    console.log("uploadFile", uploadFile);

    return res.status(200).json({
      message: "file uploaded successfully",
      filepath: uploadFile.secure_url,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
