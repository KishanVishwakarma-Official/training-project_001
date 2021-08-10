const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"Raghav480018",
    host:"localhost",
    port:5432,
    database:"project001"

})

module.exports = pool; 