exports.findProducts = (req, res) =>{
    res.status(200).json({
        message: "hello from the get route",
    });

};

exports.createProduct = (req,res) =>{
    const product= req.body;
    res.status(201).json({
        message:"hello from the post route",
        product,
    });    
};

exports.findProduct = (req, res) => {    
    const id = req.params.id

    res.status(200).json({
        message:"hello from the get route with id",
        id,
    });
};

exports.updateProduct = (req,res) => {
    const id = req.params.id;
    const {requestTime} = req;
    res.status(200).json({
        requestTime,
        message:"hello from the update route ",
        id,
    });
};
exports.deleteProduct = (req, res) => {
    console.log(req.params)
    res.status(200).json({
        ok: true,
        parametros: req.params,
    });
};
