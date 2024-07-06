import User from "../models/user.model.js";
// import bcryptjs from 'bcryptjs '
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utills/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res,next) => {
    console.log(req.body)
    // res.send("hahahah")
    const { username, email, password } = req.body;

    // console.log(username)
    // console.log(email)
    // console.log(password)
    if (!username || !email || !password || username === '' || email === '' || password === '') {
       next(errorHandler(400,"All fields are required"))
        // return res.status(404).json({ message: "All fields are required !" })
       
    }
    // const hashedPassword=bcryptjs.hashedPassword(password,10)
    const hashedPassword =  bcryptjs.hashSync
    (password, 10);
    const newUser = new User({
        username, email, 
        password:hashedPassword
    })
    try {
        await newUser.save()
        res.json({ message: "succesful sigin" })
        
    } catch (error) {
        // res.status(500).json({message:error.message})
        next(error)
    }

}

export const signin=async (req,res,next)=>{
    const{email,password } = req.body;
    if(!email||!password || email===''||password==='' ){
        next(errorHandler(400,'All fields are recquired'))
    }

    try {
        const validUser=await User.findOne({email});
        if(!validUser){
          return  next(errorHandler(404,'User NOT FOUND'))
        }
        const validPassword=bcryptjs.compareSync(password,validUser.password)
        if(!validPassword){
          return  next(errorHandler(400,'invalid password'))
        }

        const token= jwt.sign({
            id:validUser._id},
            process.env.JWT_SECRET);

        const {password:pass,...rest}=validUser._doc;
            res.status(200).cookie('accss_token',token,{
                httpOnly:true
            }).json(rest)
        

    } catch (error) {
        
    }
}