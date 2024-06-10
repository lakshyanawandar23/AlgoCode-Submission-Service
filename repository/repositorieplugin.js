const Submissionrepository=require('./submissionrepo');
const fp = require('fastify-plugin')

async function repositorieplugin(fastify,opt,done){
   // console.log(Submissionrepository);
  // console.log(fastify)
    fastify.decorate('submissionrepositorie',new Submissionrepository()); // decorate are used when you  want use that function in whole project 
}
//pluginService[Symbol.for('skip-override')] = true

module.exports=fp(repositorieplugin);