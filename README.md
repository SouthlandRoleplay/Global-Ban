# About

Zeus is an open source, fully customizable Discord bot that is constantly growing. It comes packaged with a variety of commands and a multitude of settings that can be specified to your server's specific needs. It is a **Non-Database** Discord Bot. It is easy to setup, and if you follow the instructions, it can be done by anybody! 

If you liked this repository, feel free to leave a star ⭐ to help promote Zeus to other Developers!!

# Features
50+ commands and counting across 5 different categories!

Administration: A huge amount of settings to customize with commands like globalban, unglobalban, addrole, remove more and more!
Moderation: Commands such as kick, ban, and mute to assist your moderator staff
Fun & Games: Tons of fun commands like rps, meme, coinflip, and a variety of animal pic commands like cat, dog, fox, and more!
Information: Commands like userinfo and serverinfo for general utility
Owner: Owner specific commands like eval and restart!

# Installing Node.js
Before working on this project, you want to install Node.js. You can [find the tutorial here!](https://www.youtube.com/watch?v=BxZKLKfjaRg)
Credits to Telusko For the Video.
All Rights Reserved Telusko©

# Setup
In order to setup Zeus, you can navigate down to the [*How To Make A Discord Bot Section!*](#how-to-make-a-discord-bot)
Once you're completed with that, you can go through all the commands, and change the code that says
```js 
.setTitle("Member Has Been Globally Banned from [SERVER NAME GOES HERE]")
```
Then you change that to your server name! Then for the Author title, it is like this 
```js 
.setAuthor('BOT OR GUILD NAME HERE', 'BOT IMAGE GOES HERE')
```
You can put the bot and or guild name there, and include an image!

Otherwise, intall all the packages.(You can paste them into the command prompt)
```
npm i 
npm i discord.js
npm i discord.js-poll
npm i os
npm i axios
npm i discord-reply
npm i ms
```
To change the console.log where it says "Hello, {client.user.username} is online!", you want to change the 
```js 
client.user.setUsername('CHANGE ME TO BOT USERNAME'); // Like This https://i.imgur.com/q4yTube.png to your bot name, and then it will say your own bot name! Make sure it matches the one on the Discord Dev Portal Bot Name! Next, to set the status you can do it like this:
    client.user.setStatus("dnd"); // Options: Online, Idle, dnd
```
And to set the changing status for your bot is like this:
```js
        "Status 1",
        "Status 2",
        "Status 3",
```
You can always add more, make sure you add 
```js 
"Status XX", 
```
Don't forget the comma!

Welcome and Leave Messages:

For a Welcome navigate to memberAdd.js and change the channel name like this, replace the Welcome Channel ID, with the channel ID, to do that, make sure developer is enabled in settings! Then, righ click copy ID!  
```js 
const channel = member.guild.channels.cache.find(ch => ch.id === 'WELCOME CHANNEL ID HERE'); 
```
And now change the welcomeEmbed
```js
  .setTitle('Welcome to **Your Server Name*')
  .setThumbnail('https://cdn2.newsok.biz/cache/large960_blur-7c5a1b80ca2a88068a36f7ae244d166f.jpg')
  .setDescription(`Thanks for Joing The Server!`)
  .setImage('https://cdn2.newsok.biz/cache/large960_blur-7c5a1b80ca2a88068a36f7ae244d166f.jpg')
  .setFooter('Thanks for Joining! <3')
  .setColor('RANDOM')
```
Same is with the memberRemove.js! You can mention channels like this: 
```js   
.setDescription(`<#channelID> and <#channelID2>`) 
```
For a more indepth tutorial of Discord Embed Messages, You Can [Find It Here](https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/first-bot/using-embeds-in-messages.md)

[***How to Invite The Discord Bot***](https://i.imgur.com/Yd1GJ7Z.gif)


# Command Help

If you need help with changing the embeds, [you can navigate here!](https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/first-bot/using-embeds-in-messages.md) If you want to make a guild specific bot, you can [go here]( https://discordjs.guide/popular-topics/permissions.html#permissions-after-overwrites), and for specific permissions, you [can go here.](https://discordjs.guide/popular-topics/permissions-extended.html#discord-s-permission-system)
To use roles instead of server permissions, you replace the following code:
```js
if !(message.member.hasPermission('ADMINISTRATOR') return message.channel.send('Looks Like You Have Insufficient Permissions!')) with...

if !(message.member.roles.cache.has('ROLE-ID-HERE') return message.channel.send('Looks Like You Have Insufficient Permissions!')).
```

# Command Handler for Zeus
If you want to make a command for Zeus, you want to use the following command handler: 

```js const { MessageEmbed } = require('discord.js');

module.exports = {
name: 'COMMANDNAME',  
description: 'Command Description',
run: async (client, message, args) => {
COMMAND CODE
  }
}
```

# How to make a Discord Bot
Here's the first step in making a Discord Bot. First thing you want to is go to the [Discord Dev Portal.](https://discord.com/developers) 
Then, [follow this!](https://i.imgur.com/FueF2DK.gif)
Next, make sure you [have these on!](https://i.imgur.com/Y85kIVn.png)
Now, to get your bot token [do this!](https://i.imgur.com/PWtrk5s.gif)
With your token, place in in the botconfig.lua like this:
```js
{
    "token": "OO1UJJNKGHBJ8jklhb123gyhu.NKLGUIA382KLIO89012398",
    "prefix": "PREFIX GOES HERE" 
}
```
Then, you can change your prefix to anything. Make sure the prefix doesn't collide with any other bots you may have in your server!




# Questions, Comments, Concerns.
If you have any issues, suggestions, help, feel free to contact me VIA Discord!

I hope this helped you guys with learning Javascript! I will be releasing a Music Bot Here Soon, and After that I will be releasing a Full Music/Moderation Bot, and Much More to Come!

# About The Developers
Hello! I am ClusterTech! I am a Javascript Developer, and I am showing you one of my most recent creations! This is an Open Source Bot Called "Zeus"! It has over 50 Commands, and I plan on releasing more bots in the future! Thanks Everybody! - ClusterTech

# Open Source CopyRight Infrigement

***Any Such Attempt to Republish, Claim, and or Sell my bot as yours, you WILL be pursued legally. However, if you want to resell and or redistrubate my bot, and make want to give me a percentage of the profit, and or please contact me and we can workout an agreement. If you are upgrading my bot to a different sort of bot, to re-release it, please mention or give me partial credit. Thank You. - ClusterTech***
