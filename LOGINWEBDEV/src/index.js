const express=require('express');
const path =require('path');
const bcrypt=require("bcrypt");
const { User, Application } = require("./config");
const session = require("express-session");
const app= express();
const authMiddleware = require("./authMiddleware"); 
// Session middleware
app.use(
    session({
        secret: "your_secret_key", // Change this to a strong secret key
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } // Set to true if using HTTPS
    })
);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.use(express.static("public"))
app.get("/", (req, res) => {
  res.render("index", { user: req.session.user });
});
app.get("/aboutus", (req, res) => {
    res.render("aboutus", { user: req.session.user });
});
app.get("/cuetcard", (req, res) => {
    res.render("cuetcard", { user: req.session.user });
});
app.get("/cuetpyq", (req, res) => {
    res.render("cuetpyq", { user: req.session.user });
});
app.get("/main1",authMiddleware, (req, res) => {
    res.render("main1", { user: req.session.user });
});
app.get("/cuettest", (req, res) => {
    res.render("cuettest", { user: req.session.user });
});
app.get("/gatecard", (req, res) => {
    res.render("gatecard", { user: req.session.user });
});
app.get("/gatepyq", (req, res) => {
    res.render("gatepyq", { user: req.session.user });
});
app.get("/gatetext", (req, res) => {
    res.render("gatetext", { user: req.session.user });
});
app.get("/generalinstructioncuet", (req, res) => {
    res.render("generalinstructioncuet", { user: req.session.user });
});
app.get("/generalinstructiongate", (req, res) => {
    res.render("generalinstructiongate", { user: req.session.user });
});
app.get("/generalinstructionneet", (req, res) => {
    res.render("generalinstructionneet", { user: req.session.user });
});
app.get("/generalinstructionnimcet", (req, res) => {
    res.render("generalinstructionnimcet", { user: req.session.user });
});
app.get("/generalinstructionupsc", (req, res) => {
    res.render("generalinstructionupsc", { user: req.session.user });
});
app.get("/generalinstructionjee", (req, res) => {
    res.render("generalinstructionjee", { user: req.session.user });
});
app.get("/jee", (req, res) => {
    res.render("jee", { user: req.session.user });
});
app.get("/jeecard", (req, res) => {
    res.render("jeecard", { user: req.session.user });
});
app.get("/jeemaintext", (req, res) => {
    res.render("jeemaintext", { user: req.session.user });
});
app.get("/main",authMiddleware, (req, res) => {
    res.render("main", { user: req.session.user });
});
app.get("/main2",authMiddleware, (req, res) => {
    res.render("main2", { user: req.session.user });
});
app.get("/mentor",authMiddleware, (req, res) => {
    res.render("mentor", { user: req.session.user });
});
app.get("/neet", (req, res) => {
    res.render("neet", { user: req.session.user });
});
app.get("/neetcard", (req, res) => {
    res.render("neetcard", { user: req.session.user });
});
app.get("/neettext", (req, res) => {
    res.render("neettext", { user: req.session.user });
});
app.get("/nimcet", (req, res) => {
    res.render("nimcet", { user: req.session.user });
});
app.get("/nimcetcard", (req, res) => {
    res.render("nimcetcard", { user: req.session.user });
});
app.get("/nimcetmock1", (req, res) => {
    res.render("nimcetmock1", { user: req.session.user });
});
app.get("/nimcettest", (req, res) => {
    res.render("nimcettest", { user: req.session.user });
});
app.get("/upsccard", (req, res) => {
    res.render("upsccard", { user: req.session.user });
});
app.get("/upscpyq", (req, res) => {
    res.render("upscpyq", { user: req.session.user });
});
app.get("/upsctext", (req, res) => {
    res.render("upsctext", { user: req.session.user });
});
app.get("/cuetnotes", (req, res) => {
    res.render("cuetnotes", { user: req.session.user });
});
app.get("/gatenotes", (req, res) => {
    res.render("gatenotes", { user: req.session.user });
});
app.get("/jeenotes", (req, res) => {
    res.render("jeenotes", { user: req.session.user });
});
app.get("/neetnotes", (req, res) => {
    res.render("neetnotes", { user: req.session.user });
});
app.get("/nimcetnotes", (req, res) => {
    res.render("nimcetnotes", { user: req.session.user });
});
app.get("/upscnotes", (req, res) => {
    res.render("upscnotes", { user: req.session.user });
});
app.get('/login', (req, res) => {
    res.render("login");
  })
app.get('/signup', (req, res) => {
    res.render("signup");
  })
app.post('/signup', async (req, res) => {
    console.log("Received Data:", req.body); 
    const data={
    name: req.body.name,
    email: req.body.email,
    password:req.body.password
    }
    const existUser= await User.findOne({email: data.email});
    if(existUser){
        res.send("user already exists .please choose another email");
    }
    else{
        const saltRounds=10;
        const hashedpassword= await bcrypt.hash(data.password,saltRounds);
        data.password=hashedpassword;
        const userdata=await User.insertMany(data);
        console.log(userdata);
    }

  })
  app.post("/apply", async (req, res) => {
    try {
        const { name, email, message } = req.body; // Get form data

        // Save the application details in MongoDB
        const newApplication = new Application({ name, email, message });
        await newApplication.save();

        res.send("Application submitted successfully!"); // Send success message
    } catch (error) {
        console.log(error);
        res.status(500).send("Error submitting application");
    }
});

  app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect("/");
        }
        res.redirect("/login");
    });
});

  app.post('/login', async (req, res) => {
    try {
        const check = await User.findOne({ email: req.body.email });
        if (!check) {
            return res.send("User not found");
        }
        
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
            req.session.user = { name: check.name, email: check.email };
            res.redirect("/"); // Redirect to home page after login
        } else {
            res.send("Wrong password");
        }
    } catch {
        res.send("Wrong details");
    }
});

const port=5000;
app.listen(port,()=>{
    console.log(`server is runnun on port :${port}`);
    
})