const { MessageEmbed, Message } = require("discord.js");

module.exports = {
    name: "suggest",
  category: "main",
  usage: "<message>",
    description: "suggest anything you wanted to",
    run: async (client, message, args) => {
    message.delete()
    // reasoning definition
    let suggestion = args.join(" ");
    if (!suggestion)
      return message.channel
        .send(`Please provide a suggestion!`)
        .then(m => m.delete(15000));

    // grab reports channel
    let sChannel = client.channels.cache.get("Suggestion Channel ID");
      if(!sChannel) return message.channel.send("You didnt have channel with name `suggestions`")
    // send to reports channel and add tick or cross
    message.channel
      .send("Your suggestion has been filled to the Development Team, Thank you! You can monitor it in <#ChannelID>!")
      .then(m => m.delete(15000));
    let suggestembed = new MessageEmbed()
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setAuthor('BOT OR GUILD NAME HERE', 'IMAGE LINK HERE') 
      .setTimestamp()
      .addField(`New Suggestion from:`, `**${message.author.tag}**`)
      .addField(`Suggestion:`, `${suggestion}\n**Its your choice!** Hint: ✅ = Yes, ❌ = No!`)
      .setColor('#2F3136');
    sChannel.send(suggestembed).then(async msg => {
      await msg.react("✅");
      await msg.react("❌");
    });
  }
};
 