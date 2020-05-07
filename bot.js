const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA0MzM2NzkzODcyNjI5Nzkx.Xqbq2g.zjIdNOuqBqcxctvqFMM7LklYUCE';

const prefix = '-';

bot.on('ready', () =>{
    console.log('wavehelp');
})

bot.on('message', msg=>{

  let args = msg.content.substring(prefix.length).split(" ");

  switch(args[0]){
    case 'twitter':
      msg.reply('https://twitter.com/wavequeue%27);
      break;
    case 'yeezysupply':
      msg.reply('https://www.yeezysupply.com/%27);
      break;
    case 'adidas':
      msg.reply('https://www.adidas.com/us/yeezy%27);
      break;
    case 'version':
      msg.reply('wavequeue version 1.0.0 | beta launch');
      break;
    case 'update':
      msg.reply('update zip link');
      break;
    case 'install':
      msg.reply('install zip link');
      break;
    case 'guide':
      msg.reply('coming soon');
      break;
    case 'help':
      msg.reply('coming soon');
      break;
    case 'release':
      msg.reply('Sulfur | FY5346%27');
      break;
  }
})
bot.login(token);
