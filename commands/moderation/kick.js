const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    category: "moderation",
    run: async (client, message, args) => {
        kickPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! If this is an error, please contact Management ASAP! ❌**")
        .setColor('#ff3f3f') 

        kickMessage = new MessageEmbed()
        .setTitle("**Permission Granted ✅**")
        .setDescription("**Please Mention a User! (Proper Argument !kick <@member>)**")
        .setColor('#2F3136')

        kickDeny = new MessageEmbed()
        .setTitle("**Permission Denied.**")
        .setDescription("**Sorry, you don't have permissions to kick this user! If this is an error, please contact Management ASAP! ❌**")
        .setColor('#ff3f3f') 

        validUser = new MessageEmbed()
        .setTitle("**Error! **")
        .setDescription("**Uh oh... An Error Has Occured.  Please try again or contact ClusterTech/Bear. (Proper Argument !kick <@member>).**")
        .setColor('RANDOM')


        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send(kickPermErr).then(m => m.delete({ timeout: 10000 }));
        }
        if (!args[0]) {
            return message.channel.send(kickMessage).then(m => m.delete({ timeout: 10000 }));
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(message.member.roles.highest.position <= member.roles.highest.position) return message.reply(kickDeny)

        let reason = args.slice(1).join(' ');
        if(!reason) reason = "(No Reason Provided)";
    
        kickReason = new MessageEmbed()
        .setTitle("**You Have Been kicked Fron [SERVER NAME GOES HERE]!**")
        .setDescription(`You were kicked from [SERVER NAME GOES HERE] for the reason **"${reason}"**, you were kicked by ${message.author}. This doesn't mean you are gone forever, you can still [join back!](INVITE LINK HERE) Just note, if you do what you got kicked for again, you will get a more harsh punishement.`)
        .setColor('#ff3f3f') 
    
        kickMessage2 = new MessageEmbed()
        .setTitle("Member Has Been Kicked from [SERVER NAME GOES HERE]")
        .setDescription(`The Member ${member}, has been kicked for **"${reason}"** by ${message.author}! If you did not mean to, or this was a mistake, please invite them back ASAP!`)
        .setColor('#ff3f3f')



        try {
            member.user.send(kickReason)
            await member.kick();
            await message.channel.send(kickMessage2)




        } catch (e) {
            return message.channel.send(validUser).then(m => m.delete({ timeout: 10000 }));
        }
    }
}   