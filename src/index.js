const { Client, IntentsBitField } = require('discord.js');
const { getReply } = require('./userBased');
const { commandSearch } = require('./commandsearch');
const client = new Client({ intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.GuildMembers,IntentsBitField.Flags.MessageContent] });
const {token} = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;
  if (msg.content[0]==='?') {
    const command = msg.content;
    var send = commandSearch(command);
    if(send !="null"){
      msg.channel.send(send);
    }
  }
  var reply = await getReply(msg.author.username);
  if(reply !="null"){
    msg.reply(reply);
  }
});

client.login(token);
