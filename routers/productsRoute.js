const express = require('express');

const router = express.Router();
const rescue = require('express-rescue');
const ProductController = require('../controllers/ProductController');
const { idValidation,
  createProductValidation, editProductValidation } = require('../middlewares/validators');

router
.get('/:id', idValidation, rescue(ProductController.getById))
.put('/:id', idValidation, editProductValidation, rescue(ProductController.putProduct))
.delete('/:id', idValidation, rescue(ProductController.deleteProduct))
.get('/', rescue(ProductController.getAll))
.post('/', createProductValidation, rescue(ProductController.postProduct));

module.exports = router;
