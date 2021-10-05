const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();
//conexion Base de datos
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log('Conneted to MongoDB');
});

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

//routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postsRoute);
//Puerto
app.listen(8800, () =>{
    console.log('Backend Server is running!');
})