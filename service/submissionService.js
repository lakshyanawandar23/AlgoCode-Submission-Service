const  addJob=require('../producer/submissionproducer');
class submissionService{
    constructor(submissionrepositorie){
        // it is just for test
    //     console.log(submissionrepositorie);
     this.submissionrepo=submissionrepositorie;
    }

     async pingcheck (){
          return "pong";
    }
    async addsubmission (payload){
      //  console.log(submissionrepositorie)
        console.log(this)
        const submission=await this.submissionrepo.addsubmission(payload);
       const response=await  addJob(payload);
            return  {
                queueResponse:response,
                submission:submission,
            };
        };
    }


module.exports=submissionService;     