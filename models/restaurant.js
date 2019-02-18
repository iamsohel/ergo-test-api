
const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema({

    name: String,
    address: String,
    location: {
        type: { type: String },
        coordinates: []
    }
});

restaurantsSchema.index({ location: "2dsphere" });

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

exports.Restaurants = Restaurants;