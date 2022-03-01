const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "coinflip",
    category: "fun",
    description: "flips a coin!",
    run: async(client, message, args) => {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setColor('#2F3136')
        .setAuthor('BOT OR GUILD NAME HERE', 'BOT IMAGE GOES HERE')
        .setDescription(`You flipped **${choice}**!`)
        .setFooter(`Command Used By: ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(embed)
    }
}
