//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT //5000

//middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

// database connetion
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
}).then(() => console.log("connected to the database!"))
    .catch((err) => console.log(err))

//routes
app.use("/api/post", require("./routes/routes.js"));

//start server
app.listen(port, () => console.log(`server i srunning at http://localhost:${port}`))
