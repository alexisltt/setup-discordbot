const fs = require("fs")

module.exports = async bot => {

    fs.readdirSync("./Events").filter(f => f.endsWith(".js")).forEach(async file => {

        let event = require(`../Events/${file}`);
        if (typeof event === "function") {
            bot.on(file.split(".js").join(""), event.bind(null, bot));
            console.log(`Evènement ${file} chargé avec succès !`);
        } else {
            console.error(`L'événement ${file} n'est pas une fonction valide`);
        }
    });
};