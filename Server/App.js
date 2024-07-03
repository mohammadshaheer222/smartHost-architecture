const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//route
const contactForm = require("./Controllers/contactController");
app.use("/api/v2", contactForm);

//Error handling
const ErrorHandler = require("./Utils/ErrorHandler");
app.use(ErrorHandler);

module.exports = app;
