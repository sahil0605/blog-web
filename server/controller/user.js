const User = require('../models/user');

exports.register = async(req,res)=>{
    try{
        const {name,email,password}= req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"user already exist"
            })
        }
        const newUser = new User({
            name,
            email,
            password
        })
        await newUser.save();
        return res.status(201).json({
            message:"user saved"
        })
    }catch{
        (err)=>{
            res.status(500).json({
                message:"internal server error",err
            })
        }
    }
    
}