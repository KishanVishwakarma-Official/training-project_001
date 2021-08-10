
const router = require("express").Router();
const pool = require("../db")
// Middleware
// const validInfo = require("../middleware/validInfo")
// const authorization = require("../middleware/authorization")
//  ADDING A NEW PRODUCT

router.post("/add", async(req,res)=>{

    try {
        const {pro_name, pro_desc,cat_id,is_active,created_by} = req.body;
        // if already exists
        const product =await pool.query("SELECT * FROM product_tbl WHERE pro_name = $1",[pro_name]);
        if(product.rows.length !== 0)
        {
            return res.status(401).send("product already exist")
        }
          // create a new product  
        const newProduct =  await pool.query("INSERT INTO public.product_tbl(pro_name, pro_desc,cat_id,is_active,created_by)VALUES ($1,$2,$3,$4,$5);",[pro_name, pro_desc,cat_id,is_active, created_by]) ; 
        res.json(newProduct.rows  )    

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
    } )
    
// LIST ALL PRODUCTS
 
router.get("/list", async(req,res)=>{

try {
   
    const products =  await pool.query("SELECT * FROM product_tbl;")  
    res.json(products.rows)    
} catch (err) {
    console.error(err.message);
    res.status(500).json("server error");
}
} )

// VIEW PRODUCT
router.get("/view/:id", async(req,res)=>{

    try {
        const id = req.params.id;
        const product =  await pool.query("SELECT * FROM product_tbl WHERE pro_id = $1;",[id])  
        res.json(product.rows)    
    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
    } )
    
// UPDATE PRODUCT

router.put("/update/:id", async(req,res)=>{

    try {
        const {pro_name,pro_desc,is_active,created_by} = req.body;
        const id =  req.params.id;
        
        const product =  await pool.query("UPDATE public.product_tbl SET pro_name=$1, pro_desc=$2, is_active=$3, created_by=$4 WHERE pro_id = $5;",[pro_name,pro_desc,is_active,created_by,id])  
        res.json(product.rows)    

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
} )

// DELETE PRODUCT
router.delete("/delete/:id", async(req,res)=>{

    try {
        const id =  req.params.id;
        await pool.query("DELETE FROM public.product_tbl WHERE pro_id = $1;",[id])  
        res.json("product deleted")    

    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
} )




module.exports = router;