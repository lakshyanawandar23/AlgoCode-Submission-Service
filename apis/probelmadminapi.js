const axios=require("axios");

//Sync way of Communication b/w two microservices
module.exports=async function getprobelm(id) {
    const probelm=await axios.get(`http://localhost:5000/api/v1/probelms/${id}`);
  //  console.log(probelm);
    return probelm;
}