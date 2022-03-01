const { MessageEmbed, Message } = require('discord.js')
module.exports = {
    name: "clear",
    category: "moderation",
    run: async (client, message, args) => {
    let clearPermErr = new MessageEmbed()
    .setTitle("**User Permission Error!**")
    .setDescription("**Sorry, you don't have permissions to use this! If this is an error, please contact Management ASAP! ❌**")
    .setColor('#ff3f3f') 

        chatClear = new MessageEmbed()
        .setTitle("**Permission Granted ✅**")
        .setDescription("**Please enter a amount 1 to 100! (Proper Argument !clear <amount>)**")
        .setColor('#2F3136')


        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send(clearPermErr);
        if (!args[0]) {
            return message.channel.send(chatClear).then(m => m.delete({ timeout: 10000 }));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} cleared ${deleteAmount} messages.`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`Chat Successfully Cleared.`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#2F3136')
            .setAuthor('BOT OR GUILD NAME HERE', 'BOT IMAGE GOES HERE')
        await message.channel.send(embed).then(msg => {setTimeout(() => msg.delete(), 3000)
        })
    }
}