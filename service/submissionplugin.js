const submissionService=require('./submissionService.js');
const fp = require('fastify-plugin')

async function submissionServiceplugin(fastify,opt,done){
    console.log(fastify.submissionrepositorie);
    fastify.decorate('submissionService',new submissionService(fastify.submissionrepositorie)); // decorate are used when you  want use that function in whole project 
}
//pluginService[Symbol.for('skip-override')] = true

module.exports=fp(submissionServiceplugin);