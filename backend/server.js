const express =require('express');
const app =express();
const port=8000;
const connectDB = require('./db/dbconnection');
const User = require('./db/user')
const cors= require('cors');

//middle ware for parsing jsom
app.use(express.json())

// to enable cros
app.use(cors())

//registration jo data ayega voh mongo db me lena hai
app.post('/register',async(req,res)=>{
    try{
        const {username,password} =req.body; //hame do chije chaiye username and password voh req.body se ayega
        console.log(req.body)
        const user = new User({username,password});
        await user.save(); // this get save in mongo db
        res.status(201).json({message:'Registration Successful'})

    }
    catch(error){
        res.status(500).json({error:'Registration failed'})
    }
})

app.post('/login',async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user = await User.findOne({username})

        if (!user){
            return res.status(401).json({error:'Invalid username or Password'});
        }
        if (user.password!== password){
            return res.status(401).json({error:'Invalid username or Password'})
        
        }
        res.status(200).json({message:'Login successful'})
    }
    catch(error){
        res.status(500).json({error:'Login failed'})
    }
})


connectDB();
app.listen(port,()=>{
    console.log('server is listening on post 8000')
})