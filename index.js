const app=require('./app')
const {PORT}=require('./config/serverconfig');
const fastify=require('fastify')({logger:true});
const  connecttodb=require('./config/dbconfig');
const evaluationWorker = require('./worker/responseworker');
fastify.register(app);

fastify.listen({port:PORT},async (err)=>{
    if(err){

        
        console.log(err);
    }
    await connecttodb();
     evaluationWorker('responseQueue')
    console.log("server is up");
})