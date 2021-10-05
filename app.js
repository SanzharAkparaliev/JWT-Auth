const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/AuthRoutes')

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');


// database connection
mongoose.connect('mongodb://localhost/node-auth')
.then(result => app.listen(3000,() =>{console.log(`Server has been started on port 3000`)}))
.catch((err) => {console.log(err)})


// routes
app.get('/', (req,res) => res.render('home'))
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use('/',authRoutes)
