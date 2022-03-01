// this is where you add your stuff for when a users joins
const { MessageEmbed, Message } = require('discord.js')


module.exports = async (member) => {
  
  // this is finding the welcome channel
  const channel = member.guild.channels.cache.find(ch => ch.id === 'WELCOME CHANNEL ID HERE');
  if (!channel) return;
  const welcomeEmbed = new MessageEmbed()
  .setTitle('')
  .setThumbnail('')
  .setDescription(``)
  .setImage('')
  .setFooter('')
  .setColor('')


  channel.send(welcomeEmbed); 

};

// The Welcome Message Looks Like This: https://i.imgur.com/fTxTSiP.png
// For More Embed Tips, Visit https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/first-bot/using-embeds-in-messages.md