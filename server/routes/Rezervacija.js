const express = require("express")
const router = express.Router();

router.post("/", (req, res) => {
    console.log("BODY" + req.body.filmId);
    const post = req.body;
    res.json(post);
});

module.exports = router;
