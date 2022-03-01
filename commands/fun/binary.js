const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "binary",
    category: "extra",
    run: async (client, message, args) => {
        const url = `http://some-random-api.ml/binary?text=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Text to Binary')
            .setAuthor('BOT OR GUILD NAME HERE', 'BOT IMAGE GOES HERE')
            .setColor('#2F3136')
            .setDescription(data.binary)
            .setFooter(`Command Used By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}