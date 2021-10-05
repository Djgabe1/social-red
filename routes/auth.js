const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


//Register
router.post("/register", async (req, res) =>{
    try {

        //generate new password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password: hashedPassword,
        });

        // save User and respond
        const user = await newUser.save();
        res.status(200).json(user);
        
    } catch (error) {
        console.log(error.message);
    }
});

//Login
router.post("/login", async(req, res) =>{
    try {
        //error
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json('user not found');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(404).json(' wrong password');

        //correcto
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})



module.exports = router;