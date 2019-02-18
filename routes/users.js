
const _ = require("lodash");
const express = require("express");
const { Users } = require("../models/user");
const { Restaurants } = require("../models/restaurant");
const router = express.Router();
const validateObjectId = require("../middleware/validateObjectId");


// fetch all restaurant list that nearest to 2km

router.get("/:id", validateObjectId, async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  Restaurants.find({
    location: {
      $near: {
        $maxDistance: 2000, //2km
        $geometry: {
          type: "Point",
          coordinates: [user.location.coordinates[0], user.location.coordinates[1]]
        }
      }
    }
  }).find((error, results) => {
    if (error) {
      console.log(error);
    }
    else return res.send(JSON.stringify(results, 0, 2));
  });
});


// add user

router.post("/", async (req, res) => {
  let user = new Users({
    name: req.body.name,
    location: {
      type: "Point",
      coordinates: [req.body.longitude, req.body.latitude]
    }
  });
  user.save((error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send("User could not be created.");
    }
    else return res.status(201).send("User created successfully.");
  });
});

module.exports = router;
