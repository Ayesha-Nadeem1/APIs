const Product = require('../models/product');

async function createProduct(req,res){
    try{
        //console.write(req.body);
        const product = await Product.create(req.body);
        res.status(201).json(product);//for successful req: response code 200 ki line me
    }
    catch (err){
        res.status(500).json({error: err.message});//for unsuccessful req: response code 500 ki line me
    }
}

async function getAllProducts(req,res){
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch (err){
        res.status(500).json({error: err.message});
    }
}



async function updateProduct(req, res) {
    try
    {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true }); 
        res.json(updatedProduct);
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteProduct(req, res) {
    try
    {
        const {id} = req.params;
        await Product.findByIdAndRemove(id); 
        res.sendStatus(204);
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
};
