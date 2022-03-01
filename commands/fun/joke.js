const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "joke",
    category: "fun",
    description: "I'm an Joke-In-Ator!",
    run: async(client, message, args) => {
        const choices= ["Which bear is the most condescending? A pan-duh!", "What kind of noise does a witch’s vehicle make? Brrrroooom, brrroooom.", "What’s brown and sticky? A stick.", "Two guys walked into a bar. The third guy ducked.", "How do you get a country girl’s attention? A tractor.", "Why are elevator jokes so classic and good? They work on many levels.", "What do you call a pudgy psychic? A four-chin teller.", "What did the police officer say to his belly-button? You’re under a vest.", "What do you call it when a group of apes starts a company? Monkey business.", "What do you call a naughty lamb dressed up like a skeleton for Halloween? Baaad to the bone.", "Want to know why nurses like red crayons? Sometimes they have to draw blood.", "What would the Terminator be called in his retirement? The Exterminator.", "Why do bees have sticky hair? Because they use a honeycomb.", "What’s the most detail-oriented ocean? The Pacific.", "Did you hear about the kidnapping at school? It’s fine, he woke up.", "How can you tell it’s a dogwood tree? By the bark.", "My boss told me to have a good day, so I went home.", "Why did the man fall down the well? Because he couldn’t see that well.", "When does a joke become a “dad joke?” When it becomes apparent.", "Why is Peter Pan always flying? Because he Neverlands.", "Which state has the most streets? Rhode Island.", "How do celebrities stay cool? They have many fans.", "Why did the coach go to the bank? To get his quarterback.", "Sundays are always a little sad, but the day before is a sadder day.", "You’re American when you go into a bathroom and when you come out, but what are you while you’re in the bathroom? European."];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setDescription(`**${choice}**`)
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}