const { MessageEmbed, Message } = require('discord.js')
module.exports = async member => {

    // this is finding the channel goodbye
    const channel = member.guild.channels.cache.find(ch => ch.id === 'CHANNEL ID HERE');
    if (!channel) return;

    leaveMsg = new MessageEmbed()
    .setTitle('')
    .setThumbnail('')
    .setDescription(``)
    .setImage('')
    .setFooter('')
    .setColor('')


    channel.send(leaveMsg);
};

// The Welcome Message Looks Like This: https://i.imgur.com/fTxTSiP.png
// For More Embed Tips, Visit https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/first-bot/using-embeds-in-messages.md