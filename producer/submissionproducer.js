const submissionqueue=require('../queue/submissinqueue');

module.exports= async function addJob(payload){
    console.log(payload);
await submissionqueue.add('submissionQueue',payload);
}
