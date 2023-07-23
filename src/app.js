const express = require('express');
const morgan = require('morgan');

const productRouter = require("./routes/products.route")

const app = express();

app.use(express.json());
app.use(morgan("dev"))

const getTimeRequest = (req, res, next) =>{
    const date = new Date();
    req.requestTime = date;
    next();
};

app.use(getTimeRequest);

app.use("/api/v1/products", productRouter);

module.exports = app;



