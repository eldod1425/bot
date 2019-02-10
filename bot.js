const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("544187421005316106")
setInterval(function() {
channel.send(`Bot Spam BY Gaber El Sayed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);