const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems);                // GET semua data
router.get('/:id', itemController.getItemById);            // GET 1 data
router.post('/', itemController.createItem);               // POST tambah data
router.put('/:id', itemController.updateItem);             // PUT update data
router.delete('/:id', itemController.deleteItem);          // DELETE hapus data

module.exports = router;
