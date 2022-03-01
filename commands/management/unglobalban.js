const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'unglobalban',
    category: 'moderation',
    aliases: ['unglobalban'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No Reason Provided";

        ungbanMessage = new MessageEmbed()
        .setTitle("**Permission Granted ✅**")
        .setDescription("**Please Mention a User! (Proper Argument !unglobalban <@member> <reason>)**")
        .setColor('#2F3136')
    
        ungbanPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! If this is an error, please contact Head of Management+ ASAP! ❌**")
        .setColor('#ff3f3f')


        if (!message.member.roles.cache.has('891057954713903190')) return message.channel.send(ungbanPermErr).then(m => m.delete({ timeout: 20000 }));
        const member = message.guild.members.cache.get(args[0])
        {
            if (!args[0]) {
                const member = client.users.cache.get(args[0])
                return message.channel.send(ungbanMessage).then(m => m.delete({ timeout: 20000 }));
            };
        }

        ungbanMessage2 = new MessageEmbed()
        .setTitle("Member Has Been UnGlobally Banned from [SERVER NAME GOES HERE]")
        .setDescription(`The Member <@${member.user.id}>, has been banned for **"${reason}"** by ${message.author}, they have been Un Globally Banned from **${client.guilds.cache.size} Servers**! If you did not mean to, or this was a mistake, please unban them and invite them back ASAP!`)
        .setColor('#ff3f3f')

        message.reply(ungbanMessage2)
        client.guilds.cache.forEach(async(guild) => {
            await guild.members.unban(args[0])
        })
    },
}