import express from "express";
import Product from "../modeles/product.js";
import mongoose from "mongoose";

var router = express.Router();
router.get("/user/:id", (req, res) => {
    const id = req.params.id;
    res.send(`ok + ${id}`);
});

router.get("/product", (req, res) => {
    const id = req.params.id;
    // res.send(`ok + ${id}`);
    Product.find({}).then((data) => {
        res.json(data);
    })
});

router.post('/product', (req, res) => {
    console.log(req.body);
    const name = req.body.name
    // const Product = mongoose.model('Product', { name: String });

    const product = new Product({ name });
    product.save()
        .then(() => {
            console.log('Product saved successfully');
            res.send('Product saved successfully');
        })
        .catch(error => {
            console.error('Error saving product:', error);
            res.status(500).send('Error saving product');
        });



})




export default router;
