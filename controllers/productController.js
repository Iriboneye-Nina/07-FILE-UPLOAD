const product = require('../models/Product')

const { statuscodes } = require('http-status-codes')

const createProduct = async (req, res) => {
    res.send('create product')
}

const getAllProduct = async (req, res) => {
    res.send('list all product')
}
module.exports = {
    createProduct,
    getAllProduct, 
}