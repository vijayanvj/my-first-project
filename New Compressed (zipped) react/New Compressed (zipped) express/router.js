const express=require('express');
const router=express.Router();
const User=require('./userSchema');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');

router.post('/register',async (req,res)=>{  
    



 
  
     try {
         var emailExist= await User.findOne({email:req.body.email}) ;
         if(emailExist){
             return res.status(400).json("email already Exist");
         }   
         var hash =  await bcrypt.hash(req.body.LoginPassword,10);
            const user =new User({
        Name:req.body.Name,
        email:req.body.email,
        LoginPassword:hash,
        State:req.body.State,
        mobilenumber:req.body.mobilenumber,
        caste:req.body.caste,
        mothertongue:req.body.mothertongue,
    });

    var data =  await user.save();
    res.json(data);
         
     } catch (err) {
        
     }
  
   res.json(User);
});

router.post('/login',async (req, res) => {
	try {

         var userData= await User.findOne({email:req.body.email}) ;
         if(!userData){
    
             return res.status(400).json("email not  Exist");
         }  
        
         var validPsw = await bcrypt.compare(req.body.LoginPassword,userData.LoginPassword);

         if (!validPsw){
             return res.status(400).json("password not valid");

         }

         var userToken =   jwt.sign({email:userData.email},'vijayan');
         res.header('matrimonyvj',userToken).json(userToken);
         
        
    } catch (error) {
        res.status(400).json(err);
        
    }
})

const validUser = (req,res,next)=>{
    var token =req.header('matrimonyvj');
    req.token = token;
    next();
    }
router.get('/getall',validUser,async  (req, res) => {

    jwt.verify(req.token,'vijayan', async (err,data)=>{
        if(err){
            res.sendStatus(403)
        }
        else{
           const data =await User.find();
res.json(data); 
        }
    })
	
});





module.exports=router;