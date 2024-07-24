const {Queue}=require('bullmq');

const  redisconnection=require('../config/redisconfig');

const submissionqueue =new Queue('submissionQueue',{
    connection:redisconnection
})

module.exports=submissionqueue;