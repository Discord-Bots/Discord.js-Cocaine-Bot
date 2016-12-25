const prefix = ">"
const Discord = require('discord.js');
const cocainebot = new Discord.Client();

cocainebot.on('ready', () => {
  console.log('Cocaine Bot Activated');
  cocainebot.channels.get("261913103724314625").sendMessage("Who wants some cocaine? mention me!");
});

cocainebot.on('message', message => {
 if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length)

   let args = message.content.split(" ").slice(1);

  if (command === "say") {
   message.channel.sendMessage(args.join(" "));

   }

   if (command === "invlink") {
   message.channel.sendMessage('https://discord.gg/vDg6ZUy');

   }

   if (command === "info") {
    message.channel.sendMessage('This bot is made for fun.');
	message.channel.sendMessage('This server is for buying your own custom bot, you can find Information on buying at #buying');

	}
	
	if (command === "credits") {
	message.channel.sendMessage('Developer/Creator: <@149068295381843968>');
	message.channel.sendMessage('Helper: <@151130750639538178>');
	message.channel.sendMessage('Remember this is credits on who made all of GlassShards bots!');

	}

   if (command === "cmds") {
   message.channel.sendMessage('``` invlink - Shows you a invite link to this server. ```');
   message.channel.sendMessage('``` say [message] - Makes me send your specified message to the general chat. ```');
   message.channel.sendMessage('``` cmds - Tell me what are you reading you fucking dumbass. ```');
   message.channel.sendMessage('``` info - Information about this bot and about the server```');
   message.channel.sendMessage('``` credits - Credits on who made all of <@149068295381843968>s bots.```');
 
  }
});

cocainebot.login('token');
