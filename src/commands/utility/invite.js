const { SlashCommandBuilder } = require('discord.js')
const dotenv = require('dotenv')

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Invite Eventide to your server.'),
    async execute(interaction) {
        await interaction.reply(`https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=0&scope=bot%20applications.commands`);
    }
}