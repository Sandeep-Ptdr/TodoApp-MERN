// auth.js
import express from 'express';
import User from '../models/user.models.js';
import bcrypt from 'bcryptjs'
const router = express.Router();


//SignUp
router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const hashPassword = bcrypt.hashSync(password);

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(200).json({ message: "User already exists" });
        }

        const newUser = new User({ email, username, password: hashPassword });
        await newUser.save();

        res.status(200).json({message:"Account created successFully!" });

    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
        console.log('Error in SignUp:', error);
    }
});


//Signin

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        // console.log(user,'user')
        if (!user) {
            res.status(200).json({ message: "Incorrect Email!" });
        }
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        // console.log('user password', user.password)
        // console.log('req pass', req.body.password)
        // console.log('ispassword',isPasswordCorrect);

        if (!isPasswordCorrect) {
            res.status(200).json({ message: "Incorrect  Password!" });

        }

        const { password, ...others } = user._doc;
        res.status(200).json({others} );


    } catch (error) {
        console.log('Error while login', error);
    }
})






export default router;   
