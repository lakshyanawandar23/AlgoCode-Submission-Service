const dotenv=require('dotenv');

dotenv.config();

module.exports={
    PORT:process.env.PORT,URI:process.env.ATLAS_DB_URL
}