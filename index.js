const app=require('./app')
const {PORT}=require('./config/serverconfig');
const fastify=require('fastify')({logger:true});
const  connecttodb=require('./config/dbconfig')
fastify.register(app);

fastify.listen({port:PORT},async (err)=>{
    if(err){

        
        console.log(err);
    }
    await connecttodb();
    console.log("server is up");
})