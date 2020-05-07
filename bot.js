const Discord = require('discord.js');

const client = new Discord.Client();

const BOT_TOKEN = 'NzA0MzM2NzkzODcyNjI5Nzkx.Xqbq2g.zjIdNOuqBqcxctvqFMM7LklYUCE';

 

client.on('ready', () => {

    console.log('wavehelp');

});

 

client.on('message', message => {

    if (message.content === 'twitter') {

       message.reply('https://twitter.com/wavequeue%27);
       
       }

    if (message.content === 'yeezysupply') {

       message.reply('https://www.yeezysupply.com/%27');
       
       }

    if (message.content === 'adidas') {

       message.reply('https://www.adidas.com/us/yeezy%27);
       
       }

    if (message.content === 'version') {

       message.reply('1.0.0 | beta launch');
       
       }

    if (message.content === 'update') {

       message.reply('update zip link');
       
       }

    if (message.content === 'install') {

       message.reply('install zip link');
       
       }

    if (message.content === 'guide') {

       message.reply('coming soon');
       
       }

    if (message.content === 'help') {

       message.reply('coming soon');

       }       
    
    if (message.content === 'release') {

       message.reply('Sulfur | FY5346');

       }       
       
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
