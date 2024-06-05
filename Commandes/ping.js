const Discord = require("discord.js")

module.exports = {

    name: "ping",
    description: "affiche la latence",
    permission: "Aucune",
    dm: false,

    async run(bot, message) {

        await message.reply(`Ping : \`${bot.ws.ping}\`ms`)
    }
}