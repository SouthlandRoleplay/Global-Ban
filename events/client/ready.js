module.exports = client => {
    let botStatus = [
        "Status 1",
        "Status 2",
        "Status 3",
    ]

    setInterval(function() {
        let status = botStatus[Math.floor(Math.random() * botStatus.length)];
        client.user.setActivity(status, {type: "CHANGE ME"}); // Type: WATCHING, PLAYING, STREAMING, LISTENING, 
    }, 2500 )


    client.user.setUsername('CHANGE ME TO BOT USERNAME'); // Like This https://i.imgur.com/q4yTube.png
    client.user.setStatus("dnd"); // Options: Online, Idle, dnd

    console.log(`Hello, ${client.user.username} is now online!`);
}