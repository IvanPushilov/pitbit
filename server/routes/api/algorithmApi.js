const express = require("express");
const router = express.Router();
const { Algorithm } = require("../../db/models");


router.get("/", async (req, res) => {
    try {
        const algorithms = await Algorithm.findAll();
        res.json({ algorithms });
    } catch ({ message }) {
        res.status(500).json(message);
    }
});

router.post("/algorithms", async (req, res) => {
    try{
    const { name } = req.body;
    const algorithm = await Algorithm.create({ name });
    res.json({ algorithm });
    } catch ({ message }) {
        res.status(500).json(message);
    }
});

router.delete("/algorithms/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const algorithm = await Algorithm.destroy({ where: { id } });
        res.json({ algorithm });
    } catch ({ message }) {
        res.json({ message: message });
    }
});

module.exports = router