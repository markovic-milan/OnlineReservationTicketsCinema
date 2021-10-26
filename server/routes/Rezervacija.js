const express = require("express")
const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);
    const post = req.body;
    res.json(post);
});

module.exports = router;
