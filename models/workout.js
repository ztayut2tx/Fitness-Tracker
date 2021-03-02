const mongoose = require("mongoose");
const {Schema} = mongoose;

const Plan = new  Schema ({
    day: {
        type: Date,
        default: Date
    },

    exercises: [{
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
},
    {toJSON: { virtuals: true }});

    Plan.virtual("totalDuration").get(function () {
        return this.exercises.reduce((allDurations, exercise) => {
            console.log (allDurations + exercise.duration);
            return allDurations + exercise.duration
        }, 0);
    });



const Workout = mongoose.model("Workout", Plan);

module.exports = Workout;