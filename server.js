const express = require("express");
const mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGO_URI || 'mongodb://localhost/workoutdb',
    {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false 
    } 
);

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function () {
    console.log(`Application running on port ${PORT}!`);
});

