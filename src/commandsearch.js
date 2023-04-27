const {variables} = require('./variables');

function commandSearch(command){
    var result = "null";
    var lowCommand= command.toLowerCase();
    if(lowCommand.includes("commandlist")){
        result = commandList();
    }
    if(lowCommand.includes("flirt")){
        result = Flirting();
    }
    return result;
}
module.exports = {commandSearch};

function commandList(){
    let commands = '1.Type "?flirt with mayank" to make me flirt with mayank.';
    return commands;
}
function Flirting(){
    variables.flirt = !variables.flirt;
    return (variables.flirt ? "I suddenly feel a connection with him." : "Uh, I hate him now.");
}