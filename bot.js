const Discord = require('discord.js');
const bot = new Discord.Client

const token = 'NTU5MTA5ODE3MjY5MDkyMzcy.D3gnIA.HhMnTtR_h9Pz8nCc9GTqx7oYri4';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!');
    }
});

bot.login(process.env.BOT_TOKEN);
