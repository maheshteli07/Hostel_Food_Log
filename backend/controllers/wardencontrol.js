const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const warden=require('../models/warden');
const menu=require('../models/menu')
const registerWarden= async(req,res)=>{
    const {name,password,wardenId,mobileNo,hostelNo}=req.body;
    try{
        const existingWarden=await warden.findOne({wardenId:wardenId});
        if(existingWarden){
            return res.status(400).json({message:"Warden already exists"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newWarden=new warden({
            name:name,
            password:hashedPassword,
            wardenId:wardenId,
            mobileNo:mobileNo,
            hostelNo:hostelNo
        });
        await newWarden.save();
        res.status(201).json({message:"Warden registered successfully"});
    }catch(error){
        res.status(500).json({message:"Error registering warden",error:error});
    }
}
const wardenLogin=async(req,res)=>{
    const {wardenId,password}=req.body;
    try{
        const existingWarden=await warden.findOne({wardenId:wardenId});
        if(!existingWarden){
            return res.status(404).json({message:"Warden not found"});
        }
        const isPasswordValid=await bcrypt.compare(password,existingWarden.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid password"});
        }
        const token=jwt.sign({wardenId:existingWarden.wardenId},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.status(200).json({message:"Login successful",token:token});
    }catch(error){
        res.status(500).json({message:"Error logging in warden",error:error});
    }
}
const updateMenu=async(req,res)=>{
    const {hostelNo}=req.hostelNo
    const {day,menuItems}=req.body
    try{
        //just update the menu for the given day and hostelno dont find and update 
        //update according to schema 
        // schema is 
        //     day:{
        //     type:String,
        //     required:true
        // },
        // breakfast:{
        //     type:String,
        //     required:true
        // },
        // lunch:{
        //     type:String,
        //     required:true
        // },
        // snacks:{
        //     type:String,
        //     required:true
        // }
        const newMenu={
            day:day,
            breakfast:menuItems.breakfast,
            lunch:menuItems.lunch,
            snacks:menuItems.snacks
        }
        const updatedMenu=await menu.findOneAndUpdate({day:day,hostelNo:hostelNo},newMenu,{new:true,upsert:true});
        res.status(200).json({message:"Menu updated successfully",menu:updatedMenu});
    }catch(error){
        res.status(500).json({message:"Error updating menu",error:error});
    }
        
}
