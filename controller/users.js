
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const users = data.users
const model = require('../model/user')
const User = model.User
exports.createUsers = (req,res)=>{
    const user = new User(req.body);
    user.save();
    res.json(user)
}
exports.readAllUsers = async (req,res)=>{
    const allUsers = await User.find()
    res.json(allUsers)
}
exports.readSingleUsers= async (req,res)=>{
    const id = req.params.id;
    const user = await User.findById(id);
    res.json(user)
}
exports.updateAndReplace= async(req,res)=>{
    const id = req.params.id;
    const newUser = await User.findOneAndReplace({_id:id},req.body,{new:true})
    res.json(newUser)
}
exports.update= async (req,res)=>{
    const id = req.params.id;
    const newUser = await User.findOneAndUpdate({_id:id},req.body);
    res.json(newUser)
}
exports.delete= async (req,res)=>{
    const id = req.params.id;
    const deletedUser = await User.findOneAndDelete({_id:id});
    res.json(deletedUser)  
}


//Password K9MMj64t0CSkZInN