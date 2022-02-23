const Discord = require("discord.js")

const client = new Discord.Client({
    intents: 32767
})

const disbut = require("discord-buttons")
disbut(client);

const { MessageButton, MessageActionRow } = require("discord-buttons")
const { MessageMenuOption, MessageMenu } = require("discord-buttons")

client.once("ready", () => {
    console.log("Ready")
})

client.on("messageCreate", message => {
    if(message.content.toLowerCase().startsWith("t!addtask")) {
        let task = message.content.slice(10)
            if(!task) {
                message.reply("Usage `t!addtask [Task Description]`!")
            }else {
                var button1 = new MessageButton()
                    .setLabel("Done")
                    .setStyle("green")
                    .setID("done")
                var button2 = new MessageButton()
                    .setLabel("Ciao")
                    .setStyle("red")
                    .setID("reject")

                var row = new MessageActionRow()
                    .addComponent(button1)
                    .addComponent(button2)
                
                const embed = new Discord.MessageEmbed()
                .setColor("DARK_GREEN")
                .setTitle("New Task!")
                .setDescription(task)
                .addField("Complete", "Incoming", true)
                .addField("Reject", "Incoming", false)
                .setFooter(`Given by ${message.author.username}#${message.author.discriminator}`)

                message.channel.send({embed: [embed]})
            }
    }
})

client.login("token")
