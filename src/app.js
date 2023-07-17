const express = require('express');

const productRouter = require("./routes/products.route")

const app = express();

app.use(express.json());



const updateProduct = (req,res) => {
    const id = req.params.id
    res.status(200).json({
        message:"hello from the update route ",
        id,
    });
};

const deleteProduct = (req, res) => {
    console.log(req.params)
    res.status(200).json({
        ok: true,
        parametros: req.params,
    });
};



app.patch("/api/v1/products/:id", updateProduct);

app.delete("/api/v1/products/:id", deleteProduct);


app.use("/api/v1/products", productRouter);

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
});

