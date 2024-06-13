// const testService=require('../service/testService');


// const test=new testService();
async function ping (req,res) {
    console.log(this.testServicre);
   const response =await this.submissionService.pingcheck();
   console.log(response);
   return response;
}
async function submission(req,res){
    //console.log(req.body);
    const response =await this.submissionService.addsubmission(req.body);
    return res.status(200).send({
        message:"success",
        data:response,
        error:{},
       sucess:true,
    });
}


module.exports={ping,submission};