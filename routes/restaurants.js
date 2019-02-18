const express = require("express");
const { Restaurants } = require("../models/restaurant");
const router = express.Router();

// add restaurants

router.post("/", async (req, res) => {
    let user = new Restaurants({
        name: req.body.name,
        address: req.body.name,
        location: {
            type: "Point",
            coordinates: [req.body.longitude, req.body.latitude]
        }
    });
    user.save((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send("Restaurant could not be created.");
        }
        else return res.status(201).send("Restaurant added successfully.");
    });
});

module.exports = router;
