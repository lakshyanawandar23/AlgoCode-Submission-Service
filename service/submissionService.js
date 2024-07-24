const  addJob=require('../producer/submissionproducer');
const  getprobelm  = require('../apis/probelmadminapi');
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
        console.log(payload);
       // const probelmId=payload.probelmId;
        const probelm=await getprobelm("66a0e3f8855220b67be175bc");
     //   console.log(probelm.data.data.stubus[0].language);
        //stubus is any array so you have to first the language which stubu do you want
        const lnaguagestub=probelm.data.data.stubus.find(stubus=>payload.language.toLowerCase()===stubus.language.toLowerCase());
       console.log(lnaguagestub.startsnippet);
         const code=lnaguagestub.startsnippet+"\n\n"+payload.code+"\n\n"+lnaguagestub.endsnippet;
      //  console.log(code);
        payload.code=code;
        const submission=await this.submissionrepo.addsubmission(payload);
        if(!submission){
            console.log("cannot make a submission");
        }
         console.log(probelm.data.data.testCases[0].input);
       const response=await  addJob({
        [submission._id]:{
            code:submission.code,
            language:submission.language,
            inputestcase:probelm.data.data.testCases[0].input,
            outputestcase:probelm.data.data.testCases[0].output
        }
       });
            return  {
                queueResponse:response,
                submission:submission,
            };
        };
    }


module.exports=submissionService;     