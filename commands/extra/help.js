const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "help",
    category: "extra",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Help Panel For Zeus')
            .setColor('#2F3136')
            .addFields(
                {name: 'Extra', value: '', inline: true },
                {name: 'Fun', value: '8Ball, Avatar, Binary, Coinflip, Decode, Meme, Say, Joke', inline: true },
                {name: 'Information', value: 'Help', inline: true },
                {name: 'Dept HC', value: 'Addrole, Removerole', inline: true },
                {name: 'Staff and Support', value: '', inline: true },
                {name: 'Management', value: '', inline: true },
                {name: 'Utility', value: '', inline: true },
            )
            .setAuthor('BOT OR GUILD NAME HERE', 'IMAGE LINK HERE')
            .setFooter(`Command Used By: ${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription('```In Order to use these commands do [PREFIX]CommandName.```')

        await message.channel.send(embed)
    }
}   
