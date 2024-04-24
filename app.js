const express = require('express');
const app = express();
require('./db/conn')
const userModel = require('./models/usermodel');
const { name } = require('ejs');

const PORT = process.env.PORT || 3000;
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/card', async (req,res)=>{
    let allUsers = await userModel.find()
    // console.log(allUsers);
    res.render('card',{allUsers})
})
app.post('/api/create',(req,res)=>{
    let createUser = userModel.create({name:req.body.name,email:req.body.email,image:req.body.imageurl})
    res.redirect('/card')
})
app.get('/api/delete/:id',async (req,res)=>{
    let user = await userModel.findOneAndDelete({_id:req.params.id})
    res.redirect('/card')
})
app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`);
})
