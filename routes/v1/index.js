const fastify=require('fastify')({logger:true});
async function routes(fastify,opt){
fastify.get('/ping',(req,res)=>{
    res.send("pong");
})
}

module.exports=routes;