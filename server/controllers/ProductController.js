import Product from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addProduct = async (req, res) => {
    const product = new Product(req.body);
    try{
        const insertProduct = await Product.insertMany(product);
        res.status(201).json(insertProduct);
    } catch (error){
        res.status(400).json({ message: error.message });
    }
} 


