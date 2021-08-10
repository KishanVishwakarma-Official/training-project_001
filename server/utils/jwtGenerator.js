const jwt = require("jsonwebtoken");
require("dotenv").config();


function jwtGenerator(admin_id){

    const payload = {
        user: admin_id
    }
 
    return jwt.sign(payload,process.env.jwtSecret,{expiresIn: "2hr"})
}


module.exports = jwtGenerator;