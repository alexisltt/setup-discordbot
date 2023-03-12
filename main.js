const Discord = require("discord.js")   
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadEvents = require("./Loaders/loadEvents")
const loadCommands = require("./Loaders/loadCommands")
const config = require("./config.js")
const { ActivityType } = require("discord.js")

bot.commands = new Discord.Collection()

bot.on("ready", () => {
    bot.user.setPresence({activities: [{name: "STATUS", type: ActivityType.Playing}], status: "online"})
})


bot.login(config.token)
loadCommands(bot)
loadEvents(bot)