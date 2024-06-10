const testcontroller = require('../../controllers');
async function routes(fastify,opt){
fastify.get('/ping',testcontroller.ping);
fastify.post('/submission',testcontroller.submission);
}

module.exports=routes;