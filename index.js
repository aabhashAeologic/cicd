const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 9000;

app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
  res.json({
    message:"hello from the ci cd platform"
  })
})

app.get("/cicd", (req, res) => {
  res.json({
    message: "welcome to cicd deployment"
  })
})


app.listen(port, (error) => {
  error ? console.log(`Server not started`) : console.log(`Server started at port ${port}`);
});