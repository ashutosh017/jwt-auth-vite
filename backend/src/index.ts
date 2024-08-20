import express, { urlencoded } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { userModel } from "./models/user";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import "dotenv/config"
const secret = process.env.secret_key as string;
// console.log(jwt);
// const token = jwt.sign({foo: 'Bar'}, 'shh');
// console.log(token);

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/isloggedin", (req,res)=>{
  const token = req.cookies['token'];
  // console.log(token);
  if(!token)return res.send(false)
  const resp = jwt.verify(token,secret);
  // console.log(resp);
  if(resp){
    console.log("yes logged in");
    res.send(true);
  }
  else{
    console.log("not logged in ");
    res.send(false)
  }


})
app.post("/api/signup", (req, res) => {
  const { name, email, password, age } = req.body;
  console.log(req.body);
  bcrypt.genSalt(10, async (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      const createUser = await userModel.create({
        name,
        email,
        password: hash,
        age,
      });
      const token = jwt.sign({email, hash}, secret)
      res.cookie("token",token);
      console.log(createUser);
      res.send(createUser);
    });
  });

  // res.send('Hello World!')
});

app.get("/api/logout", (req, res)=>{
  res.cookie("token","");
  res.send("loggedout")
})
app.post("/api/login", async(req, res)=>{
  // res.cookie("token","");
  const user =await userModel.findOne({email: req.body.email});
  if(!user) {
    res.send("Something Went Wrong!")
    return;
  }
    // res.send(user);

  else if(!user.password) {
    res.send("something went wrong");
    return;
  }
  else{
    bcrypt.compare(req.body.password, user.password!,(err, result)=>{
      if(result){
        const token = jwt.sign({email:req.body.email, password:req.body.password}, secret)
        res.cookie("token",token);
        res.send("you can login");
      }else{
        res.send("something went wrong")
      }
    })
  }
  
})

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
