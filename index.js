const express=require("express");
const jwt=require("jsonwebtoken");
const port=5000;
const secretkey="secretkey"
const app=express();
app.get('/' ,(req,res)=>{
    res.send("hello000")
})
app.post('/login',(req,res)=>{
    const user={
        id:123,
        username:"touseef",
        emai:"touseef@gmail.com",
    }
    jwt.sign({user}, secretkey , {expiresIn:'900s'} , (err,token)=>{
        res.json({
            token
        })
    })
})

// for token verification 
app.post("/profile" , verifyToken,(req,res)=>{
jwt.verify(req.token,secretkey,(err,authData)=>{
    if(err){
        res.send("invalid token")
    }else{
        res.json({
            message:"profile Acceed",
            authData
        })
    }
})
})
function verifyToken(req,res,next) {
    const bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader !=='undefined'){
const bearer=bearerHeader.split("");
const token=bearer[1];
req.token=token;
next();
    }else{
        res.send("token is not valid")
    }
}

app.listen(port,()=>{
    console.log(`Success http://localhost:${port}`)
})