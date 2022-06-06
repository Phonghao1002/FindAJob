const router = require("express").Router();
const cloudinary = require("cloudinary");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const fs = require("fs");
const recruitmentModel = require("../models/recruitmentModel");

// we will upload image on cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Upload image only admin can use
router.post("/upload", (req, res) => {
  //auth , authAdmin,
  try {
    console.log(req.files);
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json({ msg: "No files were uploaded." });

    const file = req.files.file;
    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large" });
    }

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is incorrect." });
    }

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "test" },
      async (err, result) => {
        if (err) throw err;

        removeTmp(file.tempFilePath);

        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );

    // res.json('test upload')
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// Delete image only admin can use
router.post("/destroy", (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) return res.status(400).json({ msg: "No images Selected" });

    cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
      if (err) throw err;

      res.json({ msg: "Deleted Image" });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.get("/getuploadCV", async (req, res) => {
  try {
    const recruitments = await recruitmentModel.find();
    res.json(recruitments);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}),
  router.post("/uploadCV", async (req, res) => {
    const {
      name,
      descriptions,
      phoneNumber,
      email,
      idJob,
      idUser,
      status = "pending",
    } = req.body;
    const fileCV = req.files.fileCV;
    try {
      if (!fileCV)
        return res.status(400).json({ msg: "No files were uploaded." });
      if (fileCV.size > 5000000) {
        return res.status(400).json({ msg: "Size too large" });
      }
      if (
        fileCV.mimetype !== "application/msword" &&
        fileCV.mimetype !== "application/pdf"
      ) {
        removeTmp(fileCV.tempFilePath);
        return res.status(400).json({ msg: "File format is incorrect." });
      }
      if (!name) {
        return res.status(400).json({ msg: "Please enter your name" });
      }
      if (!descriptions) {
        return res.status(400).json({ msg: "Please enter your descriptions" });
      }
      if (!phoneNumber) {
        return res.status(400).json({ msg: "Please enter your phoneNumber" });
      }
      if (!email) {
        return res.status(400).json({ msg: "Please enter your email" });
      }
      var urlCV = "";
      await cloudinary.v2.uploader.upload(
        fileCV.tempFilePath,
        { folder: "CV" },
        async (err, result) => {
          if (err) throw err;
          removeTmp(fileCV.tempFilePath);
          urlCV = result.secure_url;
        }
      );
      const recruitment = new recruitmentModel({
        urlCV,
        name,
        descriptions,
        phoneNumber,
        email,
        idJob,
        idUser,
        status,
      });
      // Save mongodb
      await recruitment.save();
      return res.status(200).json({
        message: "OK",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  });

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;
