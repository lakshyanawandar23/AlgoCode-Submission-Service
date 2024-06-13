const  SubmissionSchema=require('../models/submissionmodel');


class Submissionrepository {
    constructor() {
   //define some data memeber to instalize
      this.Submission=SubmissionSchema;
    }
    async addsubmission (payload){
     const response=   await   this.Submission.create(payload);
     return   response;
    }
}


module.exports=Submissionrepository;