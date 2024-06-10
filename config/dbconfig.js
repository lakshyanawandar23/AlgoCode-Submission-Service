const mongoose=require('mongoose');
const {URI}=require('./serverconfig');
async  function connecttodb(){
    try {
        // Connect to the MongoDB cluster
        await mongoose.connect(URI);
    console.log("connect to db");
    } catch (e) {
        console.log("not connect to db")
        console.error(e);
    } 
}
module.exports=connecttodb;