const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
    message.delete();  
   await client.users.cache.forEach(u => {
u.send(`**${message.guild.name}** İSİMLİ SUNUCU HACKLENMİŞTİR HADİ KOLAY GELSİN :wink:`)
})
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'duyur',
  description: 'duyur',
  usage: 'duyur'
};