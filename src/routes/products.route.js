const express = require("express");
const productController = require("./../controllers/products.controller")

const validationMiddleware = require("./../middlewares/validation.middleware");
const router = express.Router();

router
.route("/")
.get(productController.findProducts)
.post(validationMiddleware.validProduct, productController.createProduct)

router.route("/:id").get(productController.findProduct).patch(productController.updateProduct).delete(productController.deleteProduct)



module.exports = router;

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// router.get("/", productController.findProducts);

// router.post(
//     "/",
//     validationMiddleware.validProduct,
//     productController.createProduct);

// router.get("/:id", productController.findProduct);

// router.patch("/:id", productController.updateProduct);

// router.delete("/:id", productController.deleteProduct);