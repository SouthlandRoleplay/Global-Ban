const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "mute",
    category: "moderation",
    description: "A Mute Command",
    run: async (client, message, args) => {

        muteMessgae = new MessageEmbed()
        .setTitle("**Permission Granted ✅**")
        .setDescription("**Please Mention a User! (Proper Argument !mute <@member> <reason>)**")
        .setColor('#2F3136')
    
        muteDeny = new MessageEmbed()
        .setTitle("**Permission Denied.**")
        .setDescription("**Sorry, you don't have permissions to mute this user! If this is an error, please contact Management ASAP! ❌**")
        .setColor('#ff3f3f') 

        if (!message.member.hasPermission('MANAGE_ROLES')) {
            return message.channel.send(muteDeny)
        } 
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'MEMBER ROLE GOES HERE');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTE ROLE GOES HERE');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }

            let reason = args.slice(1).join(' ');
            if(!reason) reason = "(No Reason Provided)";

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}, for **${reason}**.`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send(muteMessgae);
        }
    }
}