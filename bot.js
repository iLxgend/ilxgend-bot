const Discord = require('discord.js');
const bot = new Discord.Client

const prefix = '!';

var version = 'v1.0';

bot.user.setPresence({
    status: 'online',
    activity: {
        name: '',
        type: 'dnd',
        url: ''
    }
})

bot.login(process.env.BOT_TOKEN);
