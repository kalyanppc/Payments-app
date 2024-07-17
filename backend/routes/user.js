const {Router} = require("express");
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config");
const zod = require("zod");
const { User, Account } = require("../db");
const authMiddleware = require("../middlewares/authMiddleware");


const router = Router();

const signupBody = zod.object({
      username: zod.string().email(),
      password: zod.string(),
      firstName: zod.string(),
      lastName: zod.string()
})

const singinBody = zod.object({
      username: zod.string().email(),
      password: zod.string()
})

const updateBody = zod.object({
      username: zod.string().optional(),
      firstName: zod.string().optional(),
      lastName: zod.string().optional()
})

router.post("/signup", async (req,res)=>{
      const {success, data} = await signupBody.safeParse(req.body);
      if(!success){
            return res.status(202).json({
                  msg: "invalid username and password"
            })
      }else{
            const user = await User.findOne({username: data.username, password: data.password })
            if(user){
                  return res.status(204).json({
                        msg: "username already exists"
                  })
            }else{
                  const newUser = await User.create({
                        username: data.username,
                        password: data.password,
                        firstName: data.firstName,
                        lastName: data.lastName
                  })
                  const _id = newUser.id;
                  const account = await Account.create({
                        userId: _id,
                        balance: 1+ Math.random() * 10000
                  })
                  const token = jwt.sign({userId: _id, name: user.username},JWT_SECRET);
                  return res.json({
                        msg: "user created successfully",
                        token
                  })
            }
      }
})

router.post("/signin",async (req,res)=>{
      console.log("signin reached");
      const {success, data} = singinBody.safeParse(req.body);
      if(!success){
            return res.status(400).json({
                  msg: "no proper input details"
            })
      }
      const user = await User.findOne({username: data.username, password: data.password})
      console.log(user);
      if(user == null){
            return res.status(411).json({
                  msg: "No user with these details"
            })
      }
      const _id = user._id
      const name = user.firstName;
      console.log(name);
      console.log(_id);
      const token = jwt.sign({userId: _id, name: name},JWT_SECRET);
      res.status(200).json({
            name,
            token
      })
})



router.put("/",authMiddleware, async (req,res)=>{
      const {success} = updateBody.safeParse(req.body);
      if(!success){
            res.status(411).json({msg: "Wrong inputs given"});
      }
      const _id = req.userId;
      await User.updateOne({_id},req.body)
      res.status(200).json({msg: "user updated successfully"});
})

router.get("/auth",authMiddleware, async(req, res) => {
      const username = req.userName;
      res.status(200).json({
            username
      });
})

router.get("/bulk", async (req,res)=>{
      const filter = req.query.filter || "";
      const users = await User.find({
            $or: [{
                  firstName: {
                        "$regex": filter
                  }
            },{
                  lastName: {
                        "$regex": filter
                  }
            }]
      })
      res.json({
            users: users.map((user)=>({
                  username: user.username,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  _id: user._id
            }))
      })
})


module.exports = router;