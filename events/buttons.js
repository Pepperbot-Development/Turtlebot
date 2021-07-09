const Discord = require('discord.js');
const brs = require('../models/br');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (!interaction.isButton()) return;
        let met = '0'
        let bfind = await brs.findOne({
            guild: interaction.guild.id,
            button1: interaction.customId
        });
        if(!bfind){
            met = '1'
            bfind = await brs.findOne({
                guild: interaction.guild.id,
                button2: interaction.customId
            });
        }
        if(!bfind){
            met = '2'
            bfind = await brs.findOne({
                guild: interaction.guild.id,
                button3: interaction.customId
            });
        }
        if(!bfind) return
        let role;
        if(met === '0'){
            role = interaction.guild.roles.cache.get(bfind.role1)
        } else if(met === '1'){
            role = interaction.guild.roles.cache.get(bfind.role2)
        } else if(met === '2'){
            role = interaction.guild.roles.cache.get(bfind.role3)
        }
        if(!role) return
        if(!interaction?.member?.roles?.cache?.has(role.id)){
        interaction.member.roles.add(role.id)
        await interaction.reply({ content: `Gave you the ${role} role!`, ephemeral: true });
        } else {
            interaction.member.roles.remove(role.id)
            await interaction.reply({ content: `Removed the ${role} role!`, ephemeral: true });
        }
	},
};