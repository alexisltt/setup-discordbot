const loadSlashCommands = require("../Loaders/loadSlashCommands");
const { ActivityType } = require("discord.js");

module.exports = async bot => {

    await loadSlashCommands(bot);

    let allcommands = [];
    bot.commands.forEach(command => allcommands.push({commandName: command.name, commandUsage: command.utilisation, commandDescription: command.description}));

    bot.user.setPresence({activities: [{name: "STATUS", type: ActivityType.Playing}], status: "online"});

    console.log(`${bot.user.tag} est bien en ligne`);
}
