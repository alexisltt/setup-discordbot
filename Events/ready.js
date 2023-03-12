const Discord = require("discord.js");
const loadSlashCommands = require("../Loaders/loadSlashCommands");
const config = require("../config");

module.exports = async bot => {

    await loadSlashCommands(bot);

    let allcommands = [];
    bot.commands.forEach(command => allcommands.push({commandName: command.name, commandUsage: command.utilisation, commandDescription: command.description}));

    console.log(`${bot.user.tag} est bien en ligne`)
}
