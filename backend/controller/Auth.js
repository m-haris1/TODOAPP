const User= require("../model/User");
const express = require("express");
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require("jsonwebtoken");


// const {authenticateToken} = require("../middleware/fetchUser");


exports.signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        console.log('Received signup data:', { fullName, email, password });

        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and password are required fields."
            });
        }
        console.log("All data correct");

        try {
            const existingUser = await User.findOne({ email });
            console.log('Existing user:', existingUser);
            if (existingUser !== null) {
                return res.status(400).json({
                    success: false,
                    message: "User already exists with this email."
                });
            }
        } catch (error) {
            console.error('Error finding user:', error);
            return res.status(500).json({
                success: false,
                message: "Internal server error."
            });
        }
        console.log("No user with this email ,found");
        const newUser = new User({ fullName, email, password });
        await newUser.save();

        console.log("New User created and saved");
        const accessToken = jwt.sign({ user: newUser }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "36000m"
        });
        console.log("Access Token Created");
        return res.status(200).json({
            success: true,
            accessToken,
            message: "User registration successful."
        });

    } catch (error) {
        console.error('Signup failed:', error);
        return res.status(500).json({
            success: false,
            message: "Signup failed. Please try again later."
        });
    }
};



exports.login = async (req,res)=>{
    try{
        // console.timeEnd('login-request');
        const {email,password}=req.body;
        // if(!email || !password){
        //     return res.status(400).json({
        //         success:false,
        //         message:"Please complete the information",
        //     })
        // }
        if(email===null){
            return res.status(401).json({
                success:false,
                message:"email Not found"
            })
        }

        if(password===null){
            return res.status(401).json({
                success:false,
                message:"email Not found"
            })
        }

        let userInfo=await User.findOne({email});
        if(userInfo===null)
            {
                return res.status(400).json({
                    success:false,
                    message:"Email or Password is incorrect"
                })
            }
            if(userInfo.email===email && userInfo.password===password){
                const user = {user:userInfo};
                const accessToken= await jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{
                    expiresIn:"36000m"
                })
                return res.status(200).json({
                    success:true,
                    message:"Login Successful",
                    email,
                    accessToken
                });
            }
            // Now , we have to get the hashed password as we need to match with orignally
            // what is already present into the database
            // if(await bcrypt.compare(user.password,password)){
            //     // if password also matches, then we have to create a jwt token
            //     let token=jwt.sign(payload,process.env.JWT_SCRIPT)
            //     user.token=token;
                
            //     const options={
            //         expires: new Date(Date.now()+3*24*60*60*1000),
            //         httpOnly: true,
            //     }
    
            //     res.cookie("token",token,options).status(200).json({
            //         success:true,
            //         token,
            //         user,
            //         message:"User loged in successfully"
            //     })
            // }
            else{
                return res.status(401).json({
                    success:false,
                    message:"Invalid Credentials"
                })
            }


    
    }catch(error){
        console.error();
        console.log(error);
        res.status(402).json({
            success:false,
            message:"Login Failed"
        })
    }
}



exports.getUser= async (req,res)=>{
    const userId=req.params.userid;
    try{
        const user= await User.findById({_id:userId});
        if(user==null){
            return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }
        return res.status(200).json({
            success:true,
            user:user,
            message:"User received successfully"
        })
    }catch(err){
        console.log(err);
        return res.status(401).json({
            success:false,
            message:"Internal server error"
        })
    }
}