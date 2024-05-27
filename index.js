const routes = require('./routes/index');

const fastify=require('fastify')({logger:true});


fastify.get('/',(req,res)=>{
   res.send("hello");
})

fastify.register(routes,{ prefix: '/api' });
fastify.listen({port:3000},(err)=>{
    console.log("server is up");
})