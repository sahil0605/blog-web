const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{
    try{
        const {name,email,password}= req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"user already exist"
            })
        }
        
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            name,
            email,
            password:hashedPassword,
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
    
};
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          error: "Invalid email or password",
        });
      }
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({
          error: "Invalid email or password",
        });
      }
  
      const isPasswordValid = bcrypt.compare(password, user.password);
  
      if (isPasswordValid) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        return res.status(200).json({
          message: "User Successfully logged In",
          token,
          user: user,
        });
      } else {
        return res.status(401).json({
          error: "Invalid email or password",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
    }
  };
  