const {Router} = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {Account, User}  = require("../db/index");

const router = Router();

router.get("/balance",authMiddleware, async (req,res)=>{
      const userId = req.userId;
      const user = await Account.findOne({userId})
      res.json({
            balance: user.balance
      })
})

router.post("/transfer",authMiddleware, async(req,res)=>{
      const {amount,to} = req.body;
      const account = await Account.findOne({
            userId: req.userId
      })
      if(account.balance<amount){
            return res.status(400).json({msg: "Insufficient funds"});
      }
      const toAccount = await Account.findOne({
            userId: to
      })
      if(!toAccount){
            return res.status(411).json({msg: 'Invalid Account'});
      }
      await Account.updateOne({
            userId: req.userId
      },{
            $inc: {
                  balance: -amount
            }
      })
      await Account.updateOne({
            userId: to
      },{
            $inc: {
                  balance: amount
            }
      })
      res.status(200).json({msg: "Transfer successful"});

})

module.exports = router;