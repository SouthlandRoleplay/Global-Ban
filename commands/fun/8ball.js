const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "8",
    category: "fun",
    description: "I'm an 8ball!",
    run: async(client, message, args) => {
        const choices= ["It is certain.", " It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", " As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", " Reply hazy, try again.", "Ask again later.", " Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", " Don't count on it.", "My reply is no.", " My sources say no.", " Outlook not so good.", " Very doubtful.", "That isnt it chief."];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setDescription(`**${choice}**`)
        .setColor('#2F3136')
        .setAuthor('BOT OR GUILD NAME HERE', 'BOT IMAGE GOES HERE')
        message.channel.send(embed)
    }
}
