const mongoose = require("mongoose");
const {Schema} = mongoose;

const Plan = new  Schema ({
    day: {
        type: Date,
        default: Date
    },

    excercises: [{
        type: {
            type: String
        },
        name: {
            type: String
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", Plan);

module.exports = Workout;