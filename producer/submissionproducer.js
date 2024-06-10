const submissionqueue=require('../queue/submissinqueue');

module.exports= async function addJob(payload){
await submissionqueue.add('submissionQueue',payload);
}
