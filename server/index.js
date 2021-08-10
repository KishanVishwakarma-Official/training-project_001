const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()) //req.body
app.use(cors())
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// login signup route



// admin route
app.use("/admin", require("./routes/admin"))
// product route
app.use("/product", require("./routes/product"))
// category route
app.use("/category", require("./routes/category"))

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})