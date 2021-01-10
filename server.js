const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/client/build")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});