const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  category: "fun",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const sayEmbed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setFooter(`Command Used By: ${message.author.tag}`, message.author.displayAvatarURL())
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor('#2F3136')
        .setAuthor('BOT OR GUILD NAME HERE', 'BOT IMAGE GOES HERE')

    message.channel.send(sayEmbed)
  },
};