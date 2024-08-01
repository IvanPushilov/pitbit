const express = require("express");
const router = express.Router();
const { Miner } = require("../../db/models");
const multer = require('multer');


const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/filestorage/minerImg');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });

router.get("/miners", async (req, res) => {
  try {
    const miners = await Miner.findAll();
    res.json({ miners });
  } catch ({ message }) {
    res.status(500).json(message);
  }
});
router.post("/miners", upload.single('img'), async (req, res) => {
  try {
    const { title, description } = req.body;
    let newFileUrl = '';
		if (req.file) {
			newFileUrl = `/minerImg/${req.file.originalname}`;
		}

    const miner = await Miner.create({
      title,
      description,
      img: newFileUrl,
    });
    res.json({ miner });
  } catch ({ message }) {
    res.json({ message: message });
  }
});

router.delete("/miners/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const miner = await miner.destroy({ where: { id } });
    res.json({ miner });
  } catch ({ message }) {
    res.json({ message: message });
  }
});

module.exports = router;
