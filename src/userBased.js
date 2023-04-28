https://github.com/BlueeMew/DC_Bot/blob/main/src/userBased.js
const {getPickupLine} = require('./generators/randomGenerator');
const {variables} = require('./variables');

async function getReply(username){
    var reply = "null";
    if (username.toLowerCase().includes('mayank') && variables.flirt){
        reply = await getPickupLine();
    }
    return reply;
}
module.exports = { getReply };
