const Discord = require("discord.js");
const config = require("./config.json");
require('discord-reply');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('message', async message => {
    if (message.content.startsWith('valores')) {
      message.lineReplyNoMention("**Os valores são:**\n\nPlano Mensal **R$117,00**\nPlano Semanal **R$50,00**");
    }   
});

client.on('message', async message => {
    if (message.content.startsWith('loaderatt')) {
      message.lineReplyNoMention("http://www.mediafire.com/file/le1g6a8uk4srz6v/loader_UPDATED.exe/file");
    }   
});

client.on('message', async message => {
    if (message.content.startsWith('youtube')) {
      message.lineReplyNoMention("https://www.youtube.com/channel/UCVEY3a_by_fVP1kT-FjcBhw");
    }   
});

client.on('message', async message => {
    if (message.content.startsWith('revios')) {
      message.lineReplyNoMention("```ReviOS 20H2 S 1.0```\n**One drive:** https://1drv.ms/u/s!Aifbu9DEJsJaizGrotLHt5i0o31G?e=FdUbXH\n**MediaFire:** http://www.mediafire.com/file/cjgpdrgjiqxyh1y/ReviOS_20H2_S1.0.iso/file");
    }   
});

client.login(config.token);