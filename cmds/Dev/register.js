const Discord = require('discord.js');

module.exports = {
    name: 'register',
    description: 'DEV ONLY',
    async execute(message, Member, args) {
        const client = message.client
        if (!client.application?.owner) await client.application?.fetch();
//https://discord.com/oauth2/authorize?client_id=841782635386109972&scope=bot+applications.commands
        const data = {
            name: 'server-info',
            description: 'Gets info about the server',
        };

        const command = await client.guilds.cache.get('842575277249921074')?.commands.create(data);
        //await command.setPermissions(permissions);
        console.log(command);
    }
}
//const command = await client.application?.commands.create(data);
//const command = await client.guilds.cache.get('834199640702320650')?.commands.create(data);
// const permissions = [
//     {
//         id: '820465204411236362',
//         type: 'USER',
//         permission: true,
//     },
// ];