const Discord  = require('discord.js');
const Client = new Discord.Client();
const Token = 'NjcyNTk1MjczODU5NDY1MjQ0.XjNzxA.SUENHa7rGbhezWRataxEgyrBv_I';
const Prefix = '!';

Client.on('ready', () =>{
    Client.channels.find(channels => channels.name === 'welcomes').send("Online!");
    client.user.setPresence({
        game: { 
            name: 'Tato/s disc',
            type: 'WATCHING'
        },
        status: 'idle'
    })
    console.log("Ready");
});

Client.on('guildMemberAdd', member => {
    Client.channels.find(channels => channels.name === 'welcomes').send(`Welcome to the server, ${member}`);
    Client.guilds.

});

Client.on('message', msg =>{
    if(isContain(msg.content ,'nigger')||isContain(msg.content, 'bitch')||isContain(msg.content, 'faggot')||isContain(msg.content, 'retard')){
        msg.delete();
        msg.channel.send('chill');
    }
    if (msg.content.toLowerCase().startsWith(Prefix)) {
        const args = msg.content.slice(Prefix.length).split(" ");
        const Command = args[0];
        if(Command === 'clear'){
            if (isNaN(args[1])) {
                msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
            }else{
                msg.channel.bulkDelete(parseInt(args[1]));
            }
        }
        else {    
            let embed =  new Discord.RichEmbed;
            embed.setAuthor("Muffin", 'https://cdn.discordapp.com/avatars/669719327087263770/f07f5b72e537f0175085597463621b4f.png?size=2048', 'https://cdn.discordapp.com/avatars/669719327087263770/f07f5b72e537f0175085597463621b4f.png?size=2048');
            embed.setColor('#0099ff');
            embed.addField('Tag', msg.mentions.users.first().tag);
            embed.setImage(msg.mentions.users.first().avatarURL);
            msg.channel.send(embed); 
        }
    }
});

Client.login(Token);
function isContain(input, str) {
    if(input.toLowerCase().replace(/\s/g, '').includes(str)){
        return true;
    }
    return false;
}