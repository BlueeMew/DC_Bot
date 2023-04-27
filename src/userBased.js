
const {getPickupLine} = require('./generators/randomGenerator');
const {variables} = require('./variables');

async function getReply(username){
    var reply = "null";
    if (username.includes('ew') && variables.flirt){
        reply = await getPickupLine();
    }
    return reply;
}
module.exports = { getReply };

