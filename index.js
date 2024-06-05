const Discord = require("discord.js")   
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadEvents = require("./Loaders/loadEvents.js")
const loadCommands = require("./Loaders/loadCommands.js")
const dotenv = require('dotenv')


bot.commands = new Discord.Collection()
loadCommands(bot)
loadEvents(bot)

dotenv.config();
const ENV = process.env

bot.login(ENV.TOKEN)