const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "rps",
    category: "fun",
    description: "I'm an Rock, Paper, and Scissors Command!!",
    run: async(client, message, args) => {
        const choices= [`My Selection Is... Rock! :rock: GG`, `My Selection Is... Paper! :roll_of_paper: GG`, `My Selection Is... Scissors! :scissors: GG`];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setDescription(`**${choice}**`)
        .setColor('#2F3136')
        .setAuthor('BOT OR GUILD NAME HERE', 'BOT IMAGE GOES HERE')
        .setFooter(message.author.username, message.author.displayAvatarURL())
        message.channel.send(embed)
    }
}
