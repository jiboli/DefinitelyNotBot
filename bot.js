const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Estou Pronto!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {

    if (message.content === 'Oi') {

    	message.reply('Tchau!');

  	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
