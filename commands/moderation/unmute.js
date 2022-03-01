const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unmute",
    category: "moderation",
    description: "An Unmute Command",
    run: async (client, message, args) => {
        if (!message.member.roles.cache.has('891057954609061898')) {
            return message.channel.send('Sorry, you dont have sufficient permissions.')
        } 
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'MEMBER ROLE GOES HERE');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTE ROLE GOES HERE');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted successfully!`);
        } else{
            message.channel.send('I am sorry, I cannot find that member. Please enter a valid mention or ID. Also, the proper argument is (*unmute <member>)');
        }
    }
}