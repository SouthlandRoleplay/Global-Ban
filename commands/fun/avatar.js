const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "avatar",
    category: "fun",
    description: "Displays someone's avatar!",
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])
        const avatar = user.displayAvatarURL({ size: 4096, dynamic: true})
        let embed = new MessageEmbed()
        .setTitle("Avatar")
        .setImage(avatar)
        .setTimestamp()
        .setColor('#2F3136')
        .setAuthor('BOT OR GUILD NAME HERE', 'BOT IMAGE GOES HERE')
        .setFooter(`Command Used By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    }
}