const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ban',
    category: 'moderation',
    description: 'A Ban Command',
    run: async(client, message, args) => {
    
    banPermErr = new MessageEmbed()
    .setTitle("**User Permission Error!**")
    .setDescription("**Sorry, you don't have permissions to use this! If this is an error, please contact Management ASAP! ❌**")
    .setColor('#ff3f3f') 

    banMessage = new MessageEmbed()
    .setTitle("**Permission Granted ✅**")
    .setDescription("**Please Mention a User! (Proper Argument !ban <@member> <reason>)**")
    .setColor('#2F3136')

    banDeny = new MessageEmbed()
    .setTitle("**Permission Denied.**")
    .setDescription("**Sorry, you don't have permissions to ban this user! If this is an error, please contact Management ASAP! ❌**")
    .setColor('#ff3f3f') 

    validUser = new MessageEmbed()
    .setTitle("**Error! **")
    .setDescription("**Uh oh... An Error Has Occured.  Please try again or contact ClusterTech/Bear. (Proper Argument !ban <@member> <reason>).**")
    .setColor('RANDOM')

    if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.channel.send(banPermErr).then(m => m.delete({ timeout: 10000 }));
    }
    if (!args[0]) {
        return message.channel.send(banMessage).then(m => m.delete({ timeout: 10000 }));
    }
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(message.member.roles.highest.position <= member.roles.highest.position) return message.reply(banDeny)

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "(No Reason Provided)";

    banReason = new MessageEmbed()
    .setTitle("**You Have Been Banned From [SERVER NAME GOES HERE]!**")
    .setDescription(`You were banned from [SERVER NAME GOES HERE] for the reason **"${reason}"**, you were banned by ${message.author}. If you believe this was a mistake, please make an appeal, or get in contact with a staff member. Thank You, have a Good Day.`)
    .setColor('#ff3f3f') 

    banMessage2 = new MessageEmbed()
    .setTitle("Member Has Been Banned from [SERVER NAME GOES HERE]")
    .setDescription(`The Member ${member}, has been banned for **"${reason}"** by ${message.author}! If you did not mean to, or this was a mistake, please unban them and invite them back ASAP!`)
    .setColor('#ff3f3f')

    try {
        member.user.send(banReason)
        await member.ban();
        await message.channel.send(banMessage2)

        


    } catch (e) {
        return message.channel.send(validUser).then(m => m.delete({ timeout: 10000 }));
    }
}
    }