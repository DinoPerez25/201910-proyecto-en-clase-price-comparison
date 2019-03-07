const express = require("express");
const app = express();
app.use(express.static(__dirname + "/dist"));

const server = app.listen(process.env.PORT || 5000);
