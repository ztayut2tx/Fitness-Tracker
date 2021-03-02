const db = require("../models");
const express = require("express");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.Workout.aggregate([{
            $addData: {
                "totalDuration": {
                    $total: "$exercises.duration"
                },
                "duration": "exercises.duration"
            }

        }],
        (err, data) => {
            if(err) {
                console.log(data)
                res.send(err)
            } else {
                console.log(data)
                res.send(data)
            }
        });
    });

    app.post("/api/workouts", function (req, res) {
        db.Workout.create({}).then(function(dbWorkout) {
            res.json(dbWorkout);
        });
    });

    app.put("/api/workouts/:id", function (req, res) {
        db.Workout.findByIdAndUpdate({ _id: req.params.id},
            {
                $push: { exercises: req.body },
            },
            { new: true }
            ).then(function (dbWorkout) {
                res.json(dbWorkout);
                console.log (req.body);
            });
    });

    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        });
    });


};

