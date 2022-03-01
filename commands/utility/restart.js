
module.exports = {
    name: "restart",
    category: 'utility',
    run: async (client, message, args) => {
        if (message.author.id !== 'YOUR ID GOES HERE') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Restarting bot...`)
        process.exit();
    }
}