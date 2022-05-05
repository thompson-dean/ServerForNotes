

const express = require("express")
const mongoose = require("mongoose")
var app = express()
var Data = require("./noteSchema")

//connect mongoose to mongoDB
mongoose.connect("mongodb://localhost:27017/newDB")

mongoose.connection.once("open", () => {
    console.log("Connected to database!")
}).on("error", (error) => {
console.log("Failed to connect " + error)
})

//http://192.168.0.10:8081/create

var server = app.listen(8081, "10.167.91.39", () => {
    console.log("Server is running!")
})

//CREATE A NOTE
//POST request
app.post("/create", (req, res) => {
    var note = new Data ({

        note: req.get("note"),
        title: req.get("title"),
        date: req.get("date")
    })

    note.save().then(() => {
        if (note.isNew == false) {
            console.log("Saved Data")
            res.send("Saved Data!")
        } else {
            console.log("Failed to save data")
        }
    })
})




// DELETE A NOTE
//POST request



// UPDATE A NOTE
//POST request



//FETCH ALL NOTES
//GET request



