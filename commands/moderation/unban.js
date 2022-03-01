const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    category: 'moderation',
    run: async (client, message, args) => {
        unbanPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! If this is an error, please contact Management ASAP! ❌**")
        .setColor('#ff3f3f') 

        unbanMessage = new MessageEmbed()
        .setTitle("**Permission Granted ✅**")
        .setDescription("**Please Enter a Valid User ID to Unban, or try again later! (Proper Argument !unban <userid>)**")
        .setColor('#2F3136')

        validUser = new MessageEmbed()
        .setTitle("**Error! **")
        .setDescription("**Not a Valid User! (Proper Argument !unban <userid>)**")
        .setColor('RANDOM')

        errorOccured = new MessageEmbed()
        .setTitle("**Error!**")
        .setDescription("**Uh oh... An Error Has Occured.  Please try again or contact ClusterTech/Bear. (Proper Argument !unban <userid>).**")
        .setColor('#ff3f3f')
        
        if (!message.member.roles.cache.has('891057954667769875')) return message.channel.send(unbanPermErr).then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send(unbanMessage).then(m => m.delete({ timeout: 10000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send(validUser).then(m => m.delete({ timeout: 10000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'No Reason Was Provided!';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Successfully Unbanned ${user.user.tag}`)
                    .setColor('#00ff1e') // 00ff1e
                    .addField('User ID', user.user.id, true)
                    .addField('User Tag', user.user.tag, true)
                    .addField('Banned Reason', user.reason != null ? user.reason : 'No Reason Was Provided!')
                    .addField('Unbanned Reason', reason)
                    .setAuthor('BOT OR GUILD NAME HERE', 'BOT IMAGE GOES HERE')
                    .setFooter(`Command Used By: ${message.author.tag}`, message.author.displayAvatarURL())
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`User ${member.tag} isn't banned!`)
                    .setColor('#f4424b')
                    .setFooter(`Command Used By: ${message.author.tag}`, message.author.displayAvatarURL())
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send(errorOccured)
        });

    }
}
