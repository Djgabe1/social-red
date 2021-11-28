const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
const multer = require('multer');
const path = require('path')

dotenv.config();
//conexion Base de datos
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log('Conneted to MongoDB');
});

app.use("/images", express.static(path.join(__dirname, "public/images")));

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

//Archives
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'public/images');
    },
    filename: (req,file,cb)=>{ 
        cb(null, req.body.name); 
    }
})

const upload = multer({storage});
app.post('/api/upload', upload.single('file'), (req,res)=>{
    try {
        return res.status(200).json('File uploaded successfully.');
    } catch (error) {
        console.log(error);
    }
})

//routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postsRoute);
//Puerto
app.listen(8800, () =>{
    console.log('Backend Server is running!');
})