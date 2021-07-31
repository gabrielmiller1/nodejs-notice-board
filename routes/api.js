const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../model/posts');

router.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll()));

});

router.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Added post");
});

module.exports = router;