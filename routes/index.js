const fastify=require('fastify')({logger:true});
const v1=require('./v1/index');

async function v1routes (fastify,opt) {
fastify.register(v1,{prefix:'/v1'});
}  

module.exports=v1routes;