const express = require('express');
const router = express.Router();

// Define routes
router.get('/:id', (req, res) => {
    res.send('User ID: ' + req.params.id);
});

module.exports = router;
