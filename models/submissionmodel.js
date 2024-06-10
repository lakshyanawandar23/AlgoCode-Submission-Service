const {Schema, mongoose}=require('mongoose');



const SubmissionModel=new Schema({
    Userid :{
        type:Number,
        required:[true,"User id is required for submission"]
    },
    code:{
        type:String,
        required:[true,"Code is required for Submission"]
    },
    language:String,
   probelmid:{
    type:Number,
    required:[true,"Probelm id is required for submission"]
   },
   status:{
    enum:["WA","MLE","TLE","Succes","Pending"],
   }

})

const SubmissionSchema=  mongoose.model("submission",SubmissionModel);

module.exports=SubmissionSchema;