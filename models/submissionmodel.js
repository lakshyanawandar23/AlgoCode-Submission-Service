const {Schema, mongoose}=require('mongoose');
const SubmissionModel=new Schema({
    userId :{
        type:String,
        required:[true,"User id is required for submission"]
    },
    code:{
        type:String,
        required:[true,"Code is required for Submission"]
    },
    language:String,
   probelmId:{
    type:String,
    required:[true,"Probelm id is required for submission"]
   },
   status:{
    type:String,
    enum:["WA","MLE","TLE","Success","Pending"],
    default:"Pending",
   },
   language:{
    type:String,
    require:[true,"cannot be empty"]
   }

})

const SubmissionSchema=  mongoose.model("submission",SubmissionModel);

module.exports=SubmissionSchema;