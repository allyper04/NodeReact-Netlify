const express = require("express");
const { User } = require("./models");

const router = express.Router();


router.post("/login", async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({where: {email}});

    if (user) {

      if (user.password !== password)
        return res.send({success: false, message: "MALI PASSWORD"});

      return res.send({success: true, message: "SUCCESS",user: user});

    }

    return res.send({success: false, message: "WLANG ACCOUNT"});





  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const {email, password,name } = req.body;

    await User.create({email, password,name});
    res.send({success: true, message: "SUCCESS"});





  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});


router.post("/sample", async (req, res) => {
  try {
    // const users = await User.findAll();
    // res.status(200).json(users);
    res.send({success: true, message: "pogi ako"});





  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});


router.get("/get", async (req, res) => {
  try {
    // const users = await User.findAll();
    // res.status(200).json(users);
    res.send("BOBO");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});


router.post("/get-all-submit", async (req, res) => {
    try {
      // const users = await User.findAll();
      // res.status(200).json(users);
      res.send({success: true, message: "YOUGET AKK SUBMIT"});


    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve users" });
    }
  });



  


module.exports = router;
