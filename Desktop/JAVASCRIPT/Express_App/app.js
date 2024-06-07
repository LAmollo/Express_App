// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs'); 

// Initialize Express app
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine
app.set('view engine', 'ejs'); // using EJS view engine

// Import routes
const indexRoute = require('./routes/index');
const userRoute = require('./routes/user');

// Import middleware
const middleware = require('./middleware');

// Use middleware
app.use(middleware);

// Define routes
app.use('/', indexRoute);
app.use('/user', userRoute);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
