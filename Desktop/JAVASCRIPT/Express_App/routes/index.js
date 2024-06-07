const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

router.get('/view1', (req, res) => {
    res.render('view1', { title: 'View 1' });
});

router.get('/view2', (req, res) => {
    res.render('view2', { title: 'View 2' });
});

router.post('/submit', (req, res) => {
    console.log('Received form data:', req.body);
    res.send('Success');
});

router.get('/download', (req, res) => {
    const file = __dirname + '/../public/sample.jpg';
    res.download(file);
});

module.exports = router;
