const Discord = require('discord.js');
const bot = new Discord.Client

const prefix = '!';

var version = 'v1.0';

client.user.setStatus('dnd')

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: '.',
            type: "dnd",
            url: ""
        }
    });
});

bot.login(process.env.BOT_TOKEN);
