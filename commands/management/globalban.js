const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'globalban',
    category: 'moderation',
    aliases: ['globalban'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
    
    gbanMessage = new MessageEmbed()
    .setTitle("**Permission Granted ✅**")
    .setDescription("**Please Mention a User! (Proper Argument !globalban <@member> <reason>)**")
    .setColor('#2F3136')

    gbanPermErr = new MessageEmbed()
    .setTitle("**User Permission Error!**")
    .setDescription("**Sorry, you don't have permissions to use this! If this is an error, please contact Head of Management+ ASAP! ❌**")
    .setColor('#ff3f3f')

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(gbanPermErr).then(m => m.delete({ timeout: 20000 }));
        const member = client.users.cache.get(args[0])
        {
        if (!args[0]) {
            const member = client.users.cache.get(args[0])
            return message.channel.send (gbanMessage).then(m => m.delete({ timeout: 20000 }));
        };
        }
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No Reason Provided";

        gbanReason = new MessageEmbed()
        .setTitle("**You Have Been Globally Banned From [SERVER NAME GOES HERE]!**")
        .setDescription(`You were banned from [SERVER NAME GOES HERE] for the reason **"${reason}"**, you were banned by ${message.author}. If you believe this was a mistake, please make an appeal, or get in contact with a staff member. Thank You, have a Good Day.`)
        .setColor('#ff3f3f') 
    
        gbanMessage2 = new MessageEmbed()
        .setTitle("Member Has Been Globally Banned from [SERVER NAME GOES HERE]")
        .setDescription(`The Member ${member}, has been banned for **"${reason}"** by ${message.author}, they have been globally banned from **${client.guilds.cache.size} Servers**! If you did not mean to, or this was a mistake, please unban them and invite them back ASAP!`)
        .setColor('#ff3f3f')

        if(client.users.cache.has(member)) {
            message.reply(gbanMessage)
        } else {
            message.reply(gbanMessage2)
        }
        client.guilds.cache.forEach(async(guild) => {
            guild.members.ban(args[0])
        })
    },
}