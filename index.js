const Discord = require("discord.js")

const client = new Discord.Client({
    intents: 32767
})

client.once("ready", () => {
    console.log("Ready")
})

client.on("messageCreate", message => {
    if(message.content.toLowerCase().startsWith("t!addtask")) {
        let task = message.content.slice(10)
            if(!task) {
                message.reply("Usage `t!addtask [Task Description]`!")
            }else {
                const embed = new Discord.MessageEmbed()
                .setColor("DARK_GREEN")
                .setTitle("New Task!")
                .setDescription(task)
                .addField("\✅", "Incoming", true)
                .addField("\❌", "Incoming", false)

                message.channel.send({embeds: [embed]}).then(msg => {
                    msg.react("✅")
                    msg.react("❌")
                })
            }
    }
})

client.login("token")
