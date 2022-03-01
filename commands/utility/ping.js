const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  category: "utility",
  description: "Returns Latency and API Ping",
  timeout: 10000,
    run: async (client, message, args) => {
      const msg = await message.channel.send("Pinging...");
      const Embed = new MessageEmbed()
        .setTitle("Pong! The Bots Ping Is:")
        .setAuthor('BOT OR GUILD NAME HERE', 'BOT IMAGE GOES HERE')
        .setDescription(
          `⌛ Latency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\n⏲️ API Ping is ${Math.round(client.ws.ping)}`
        )
        .setFooter(`Command Used By: ${message.author.tag}`, message.author.displayAvatarURL())
        .setColor('#2F3136');
        msg.edit(Embed);
    }
};