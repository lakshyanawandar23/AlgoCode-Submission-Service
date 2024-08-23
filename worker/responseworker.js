const { Worker } = require('bullmq');
const redisConnection = require('../config/redisconfig');
const axios = require('axios');
const SubmissionSchema=require('../models/submissionmodel');

function evaluationWorker(queue) {
    new Worker('responseQueue', async job => {
        console.log("response add in queue",job.data);
        if (job.name === 'response') {

            try {
                const response = await axios.post('http://localhost:3001/sendPayload', {
                    userId: job.data.userId,
                    payload: job.data
                })
               // console.log(response);
               const size=job.data.response.length;
               console.log(size);
               const result=job.data.response[size-1].status;
               console.log(result,job.data.submissionid);
                 const updatestatus=await SubmissionSchema.findByIdAndUpdate({_id:job.data.submissionid} ,{status:result},{new:true});
                 console.log(updatestatus);
            } catch(error) { 
                console.log(error)
            }
        }
    }, {
        connection: redisConnection
    });
}

module.exports = evaluationWorker;