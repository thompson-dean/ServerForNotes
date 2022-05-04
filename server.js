

const express = require("express")
const mongoose = require("mongoose")
var app = express()
var Data = require("./noteSchema")

//connect mongoose to mongoDB
mongoose.connect("mongoDB://localhost/newDB")

mongoose.connection.once("open", () => {
    console.log("Connect to database")
}).on("error", (error) => {
console.log("Failed to connect " + error)
})

//CREATE A NOTE
//POST request
app.post("/create", (req, res) => {
    var note = new Data ({

        note: req.get("note"),
        title: req.get("title"),
        date: req.get("date"),
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

//http://192.168.0.10:8081/create

var server = app.listen(8081, "192.168.0.10", () => {

    console.log("Server is running!")

})


// DELETE A NOTE
//POST request



// UPDATE A NOTE
//POST request



//FETCH ALL NOTES
//GET request



