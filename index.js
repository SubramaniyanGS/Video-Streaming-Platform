const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/user");
const movieRoute=require("./routes/movie");
const listRoute=require("./routes/list");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/movie",movieRoute);
app.use("/api/list",listRoute);

app.listen(5000,()=>{
    console.log("Server is Running on 5000");
});