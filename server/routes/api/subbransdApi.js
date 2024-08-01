const express = require("express");
const router = express.Router();
const { SubBrand } = require("../../db/models");


router.get("/", async (req, res) => {
    try {
        const subbrands = await SubBrand.findAll();
        res.json({ subbrands });
    } catch ({ message }) {
        res.status(500).json(message);
    }
});

router.post("/subbrands", async (req, res) => {
    try{
    const { name } = req.body;
    const subbrand = await SubBrand.create({ name });
    res.json({ subbrand });
    } catch ({ message }) {
        res.status(500).json(message);
    }
});

router.delete("/subbrands/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const subbrand = await SubBrand.destroy({ where: { id } });
        res.json({ subbrand });
    } catch ({ message }) {
        res.json({ message: message });
    }
});

module.exports = router