const Discord = require('discord.js');
const fs = require('fs');
const { poll } = require('discord.js-poll');
const axios = require('axios');
const os = require('os');
const { MessageEmbed } = require('discord.js');
const inlinereply = require('discord-reply');

const client = new Discord.Client({
    disableEveryone: true,
});
const config = require("./botconfig.json");
const token = config.token;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;


["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('guildMemberAdd', async member => {
    require("./events/guild/memberAdd")(member)
})

client.on('guildMemberRemove', async member => {
    require("./events/guild/memberRemove")(member)
})

client.login(token);