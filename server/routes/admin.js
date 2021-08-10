//////////////    ADMIN 


const router = require("express").Router();
const pool = require("../db")
const bcrypt = require("bcrypt");
const jwtGenerator =require("../utils/jwtGenerator")
// Middleware
const validInfo = require("../middleware/validInfo")
const authorization = require("../middleware/authorization")


    

//  ADDING A NEW ADMIN
router.post("/add",validInfo, async(req,res)=>{

    try {
        const {name,email,password} = req.body;
        // if already exists
        const admin =await pool.query("SELECT * FROM public.admin_tbl WHERE admin_email =$1; ",[email]);
        if(admin.rows.length !== 0)
        {
            return res.status(401).send("Admin already exist")
        }
         //3. if not  bcrypt user's password
         const saltRound = 10;
         const salt = await bcrypt.genSalt(saltRound);
         const bcryptPassword = await bcrypt.hash(password,salt);

          // create a new admin
        const newAdmin =  await pool.query("INSERT INTO public.admin_tbl(admin_name, admin_email, password)VALUES ($1,$2,$3) RETURNING *;",[name,email,bcryptPassword]) ; 
         // generating our JWT token
         const token = jwtGenerator(newAdmin.rows[0].admin_id);
        res.json({token})    

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
} )


// login route

router.post("/login", async (req,res)=>{
    try {
        //1. destructure req.body
        const {email,password} = req.body;
        //2. check if user does not exist
        const admin = await pool.query("SELECT * FROM admin_tbl WHERE admin_email = $1",[email]);
        if(admin.rows.length === 0)
        {
            return res.status(401).json("Email or password incorrect" )
        }

        //3. check if incoming password is same as database password
        const validPassword = await bcrypt.compare(password, admin.rows[0].password);
        if(!validPassword)
        {
            return res.status(401).json("Email or password incorrect" )
        }

        //4. give the JWT token
        const token = jwtGenerator(admin.rows[0].admin_id);
 
        res.json({token:token})



    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
})



    
// LIST ALL ADMINS
 
router.get("/list",async(req,res)=>{

try {
   
    const admins =  await pool.query("SELECT * FROM public.admin_tbl;")  
    res.json(admins.rows)    
} catch (err) {
    console.error(err.message);
    res.status(500).json("server error");
}
} )

// VIEW ADMIN BY ID
router.get("/view/:id", async(req,res)=>{

    try {
        const id = req.params.id;
        const admin =  await pool.query("SELECT * FROM public.admin_tbl WHERE admin_id = $1",[id])  
        res.json(admin.rows)    
    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
    } )
    
// UPDATE ADMIN
router.put("/update/:id", async(req,res)=>{

    try {
        const {name,email,password,active} = req.body;
        const id =  req.params.id;
        
        const admin =  await pool.query("UPDATE public.admin_tbl SET admin_name=$1, admin_email=$2, password=$3 , is_active= $4 WHERE admin_id = $5;",[name,email,password,active,id])  
        res.json(admin.rows)    

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
} )

// DELETE ADMIN
router.delete("/delete/:id", async(req,res)=>{

    try {
        const id =  req.params.id;
       await pool.query("DELETE FROM public.admin_tbl WHERE admin_id = $1;",[id])  
        res.json("Admin is deleted")    

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
} )




module.exports = router;