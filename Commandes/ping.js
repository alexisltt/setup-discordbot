const Discord = require("discord.js")

module.exports = {

    name: "ping",
    description: "affiche la latence",
    utilisation: "!ping",
    permission: "Aucune",
    dm: false,
    category: "<:info:1074789555821101097> Information",

    async run(bot, message, args) {

        await message.reply(`Ping : \`${bot.ws.ping}\`ms`)
    }
}