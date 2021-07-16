const Discord = require('discord.js');
const settings = require('../../models/settings')
const config = require('../../config.json')
const mongoose = require('mongoose')

module.exports = {
    name: 'settings',
    aliases: ['config', 'setting'],
    category: 'Config',
    description: `Creates the role`,
    permissions: 'ADMINISTRATOR',
    async execute(message, Member, args) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            const tembed = new Discord.MessageEmbed()
                .setTitle(`${require('../../emojis.json').tb} What would you like to edit?`)
                .setDescription(`Use \`${config.prefix}{setting}\` to enable a setting`)
                .addField(`\`${config.prefix}enable-link\``, `Delete discord invite links?`)
                .addField(`\`${config.prefix}enable-welcomemsg\` Welcome Messages?`, "`True or false`")
                .addField(`\`${config.prefix}prefix\` Prefix?`, `What prefix?`)
                .addField(`\`${config.prefix}levelch\``, `Should i send level messages in a specific channel?`)
                .addField(`\`${config.prefix}enable-snipe\` Auto Snipe?`, `When a message is deleted i will post it in the mentioned channel`)
                .setColor(message.client.confiig.color)
            const sentmsg = await message.channel.send({ embeds: [tembed] });
        }
    }
}