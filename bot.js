const Discord = require('discord.js');
const bot = new Discord.Client

const prefix = '!';

var version = 'v1.0';

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: '',
            type: "idle",
            url: ""
        }
    })
})
bot.login(process.env.BOT_TOKEN);
