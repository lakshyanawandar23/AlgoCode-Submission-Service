const Redis=require('ioredis');

const redisconfig ={
    PORT:process.env.REDIS_PORT,
    host:process.env.REDIS_IP,
    maxRetriesPerRequest:null
};

const redisconnection=new Redis(redisconfig);

module.exports=redisconnection;