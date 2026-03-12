const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');

// Import the Controller
const {
    getAllTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
} = require('../controllers/transactionController');

const {getAllUsers, createUser} = require('../controllers/userController');


router.get('/Users', getAllUsers);
//router.get('/Users/:id', getAllTransactionById);


router.post('/Users', protect, authorize('admin', 'manager'), createUser);
router.post('/Transaction',  protect, authorize('admin', 'manager'), createTransaction);
router.put('/Transaction/:id',  protect, authorize('admin', 'manager'), updateTransaction);
router.delete('/Transaction/:id',  protect, authorize('admin', 'manager'), deleteTransaction);

module.exports = router;