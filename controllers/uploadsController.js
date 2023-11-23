const product = require('../models/Product')
const { statuscodes } = require('http-status-codes')



const uploadProductImage = async (req, res) => {
    res.send('create product')
}

module.exports = {
    uploadProductImage,
}