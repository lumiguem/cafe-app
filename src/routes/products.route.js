const express = require("express");

const router = express.Router()

const findProducts = (req, res) =>{
    res.status(200).json({
        message: "hello from the get route",
    });

};

const createProduct = (req,res) =>{
    const product= req.body;
    res.status(201).json({
        message:"hello from the post route",
        product,
    });    
};

const findProduct = (req, res) => {    
    const id = req.params.id

    res.status(200).json({
        message:"hello from the get route with id",
        id,
    });
};

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


router.get("/", findProducts);
router.post("/", createProduct);
router.get("/:id", findProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);






module.exports = router;