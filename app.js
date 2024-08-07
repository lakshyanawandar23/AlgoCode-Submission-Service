const fastifyPlugin = require('fastify-plugin');
const submissionServiceplugin = require('./service/submissionplugin');
const routes=require('./routes');
const repositorieplugin = require('./repository/repositorieplugin');

/**
 * 
 * @param {Fastify object} fastify 
 * @param {*} options 
 */

//plugin will have fastify ,opt,done as argument 
async function app(fastify, options) {
    fastify.register(require('@fastify/cors'));

  //  await fastify.register(require('@fastify/cors'));
   await fastify.register(repositorieplugin); 
   await  fastify.register(submissionServiceplugin);


    //fastify.register(connecttodb);

    // register test routes
     fastify.register(routes,{ prefix: '/api' });


}

module.exports = fastifyPlugin(app);