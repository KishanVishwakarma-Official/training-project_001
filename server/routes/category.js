const router = require("express").Router();
const pool = require("../db")
// Middleware
const validInfo = require("../middleware/validInfo")
const authorization = require("../middleware/authorization")
//  ADDING A NEW PRODUCT
router.post("/add", async(req,res)=>{

    try {
        const {cat_name, created_by} = req.body;
        // if already exists
        const category =await pool.query("SELECT * FROM public.category_tbl WHERE cat_name = $1",[cat_name]);
        if(category.rows.length !== 0)
        {
            return res.status(401).send("category already exist")
        }
          // create a new category
        const newCategory =  await pool.query("INSERT INTO public.category_tbl(cat_name, created_by) VALUES ($1,$2);",[cat_name, created_by]) ; 
        res.json(newCategory.rows)    

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
    } )
    
// LIST ALL CATEGORY
 
router.get("/list", async(req,res)=>{

try {
   
    const categories =  await pool.query("SELECT * FROM public.category_tbl;")  
    res.json(categories.rows)    
} catch (err) {
    console.error(err.message);
    res.status(500).json("server error");
}
} )

// VIEW category
router.get("/view/:id", async(req,res)=>{

    try {
        const id = req.params.id;
        const category =  await pool.query("SELECT * FROM public.category_tbl WHERE cat_id = $1",[id])  
        res.json(category.rows)    
    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
    } )
    
// UPDATE Category

router.put("/update/:id", async(req,res)=>{

    try {
        const {cat_name,created_by} = req.body;
        const id =  req.params.id;
        
        const category =  await pool.query("UPDATE public.category_tbl SET cat_name=$1, created_by=$2 WHERE cat_id=$3;",[cat_name,created_by,id])  
        res.json(category.rows)    

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
} )

// DELETE PRODUCT
router.delete("/delete/:id", async(req,res)=>{

    try {
        const id =  req.params.id;
       await pool.query("DELETE FROM public.category_tbl WHERE cat_id = $1;",[id])  
        res.json("Category deleted")    

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
} )




module.exports = router;