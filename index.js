const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./storage");
  },
  filename: (req, file, cb) => {
    const originalName = path.parse(file.originalname).name;
    const ext = path.extname(file.originalname);
    cb(null, originalName + ext);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("avatar"), (req, res) => {
  res.status(200).json({
    status: 200,
    message: "File uploaded successfully",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
