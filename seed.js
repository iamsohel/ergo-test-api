const { Users } = require("./models/user");
const { Restaurants } = require("./models/restaurant");
const mongoose = require("mongoose");
const config = require("config");

const data = [
    {
        name: "Mirpur-12",
        address: "Cisilian",
        latitude: 23.82235,
        longitude: 90.365417
    },
    {
        name: "KFC-Mohakhali",
        address: "Mohakhali",
        latitude: 23.777628,
        longitude: 90.405449
    },
    {
        name: "Vooter Bari",
        address: "Dhanmondi",
        latitude: 23.746466,
        longitude: 90.376015
    },
];

async function seed() {
    await mongoose.connect(config.get("db"));

    await Users.deleteMany({});
    await Restaurants.deleteMany({});

    for (let res of data) {
        let user = new Users({
            name: res.name,
            name: res.address,
            location: {
                type: "Point",
                coordinates: [res.longitude, res.latitude]
            }
        });
        user.save();
        //await Restaurants.insertMany(restaurants);
    }

    mongoose.disconnect();

    console.info("Done!");
}

seed();