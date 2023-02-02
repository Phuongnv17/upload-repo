// Create express app
const express = require("express");
const app = express();

const path = require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
const HTTP_PORT = 8000;
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT + ''))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get("/*.*", (req, res, next) => {
    const found = /([^\/]*\.*)$/.exec(req.path);
    console.log(found)
    res.sendFile(path.join(__dirname+'/public/'+ found[1]));
});



app.get("/api/tickets", (req, res, next) => {
    res.json({"message": "created"})
});

app.post("/api/tickets", (req, res, next) => {

    console.log(req)
    res.json({"message": "All", "data": req.body})
});

// Insert here other API endpoints

// Default response for any other request
app.use(function (req, res) {
    console.log('not found')
    res.status(404);
    res.json({"message": "not found!"})
});
