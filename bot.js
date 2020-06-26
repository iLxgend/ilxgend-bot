const Discord = require('discord.js');
const bot = new Discord.Client

const prefix = '!';

var version = 'v1.0';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'website':
            message.channel.sendMessage('https://www.youtube.com/channel/UCdBk3opOaxNY05mK9vnvfxA')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('I am currently on ' + version)
            }else{
                message.channel.sendMessage('Invalid arguments.')
            }
        break;
        case 'clear':
            if(!args[1]) return message.reply('Error please define second arg.')
            message.channel.bulkDelete(args[1]);
            break;

        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Name', message.author.username, true)
            .addField('Version', version, true)
            .addField('Current Server', message.guild.name, true)
            .setColor(0xFF0000)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Subscribe to iLxgend on YT!')
            .setTimestamp(timestamp = new Date)
            message.channel.sendEmbed(embed);
            break;


    }
})

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: '',
            type: "IDLE",
            url: ""
        }
    })
})
bot.login(process.env.BOT_TOKEN);
