const Discord  = require('discord.js');
const Client = new Discord.Client();
const fetch = require('node-fetch');
const Token = 'NjcyNTk1MjczODU5NDY1MjQ0.XjNzxA.SUENHa7rGbhezWRataxEgyrBv_I';
const Prefix = '!';


Client.on('ready', () =>{
    Client.channels.find(channels => channels.name === 'bot-log-and-tests').send("Online!");
    console.log("Ready");
});
Client.on('guildMemberAdd', member => {
    Client.channels.find(channels => channels.name === 'welcomes').send(`Welcome to the server, ${member}`);
    Client.guilds.get('671795584390397972').createEmoji(member.user.avatarURL, member.user.username);
});
Client.on('message', msg =>{
    if(isContain(msg.content ,'nigger')||isContain(msg.content, 'bitch')||isContain(msg.content, 'faggot')||isContain(msg.content, 'retard')){
        msg.delete();
    }
    if (msg.content.toLowerCase().startsWith(Prefix)) {
        const args = msg.content.slice(Prefix.length).split(" ");
        const Command = args[0];
        if(Command === 'clear'){
            if (isNaN(args[1])) {
                msg.channel.send(`You didn't a valid argument, ${msg.author}!`);
            }else if(args[1]<1 || args[1]>99){
                msg.channel.send(`argument has to be bigger than 0 and smaller than 99, ${msg.author}!`);
            }
            else{
                msg.channel.bulkDelete(parseInt(args[1]));
            }
        }else if(Command === 'add'){
            add(msg);
        }
        else if(Command === 'avatar'){   
            avatar(msg, args[1]);
        }
        else if(Command === 'weather'){ 
            weather(msg);
        }
        else if(Command === 'help'){ 
            help(msg);
        }
        else if(Command === 'status'){ 
            msg.channel.send('working');
        }
        else if(Command === 'meme'){ 
            meme(msg);
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
function help(msg){
    let embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Help')
    .addField('!avatar', 'reeeeeeeeeeeee')
    .addField('!weather', 'reeeeeeeeeeeee')
    .addField('!clear', 'reeeeeeeeeeeee')
    .addField('!help', 'reeeeeeeeeeeee')
    .addField('!add', 'reeeeeeeeeeeee')
    .addField('!meme', 'reeeeeeeeeeeee')
    msg.channel.send(embed);
}
function weather(msg){
    fetch('https://api.openweathermap.org/data/2.5/weather?id=6173331&appid=1d3997b9fa93fafcde434323d1c7e5c1&units=metric')
             .then(res => res.json())
            .then(json => {
         msg.channel.send('It is '+json.main.temp+ '° in '+ json.name+', '+json.sys.country);
        
    });
}
function avatar(msg, name){
    if (name==null) {
        msg.channel.send(`You didn't a valid argument, ${msg.author}!`);
    }else{
    let embed =  new Discord.RichEmbed;
    embed.setAuthor("Muffin", 'https://cdn.discordapp.com/avatars/669719327087263770/f07f5b72e537f0175085597463621b4f.png?size=2048', 'https://cdn.discordapp.com/avatars/669719327087263770/f07f5b72e537f0175085597463621b4f.png?size=2048');
    embed.setColor('#0099ff');
    embed.addField('Tag', msg.mentions.users.first().tag);
    embed.setImage(msg.mentions.users.first().avatarURL);
    msg.channel.send(embed); 
    }
}
function add(msg){
    if (args[1]==null || args[2]==null) {
        msg.channel.send(`You didn't valid arguments, ${msg.author}!`);
    }else{
        Client.guilds.get('671795584390397972').createEmoji(args[1] , args[2]);
    }
}
function meme(msg){
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(json => {
        let embed =  new Discord.RichEmbed;
        embed.setColor('#0099ff');
        embed.setTitle(json.title);
        embed.setImage(json.url);
        msg.channel.send(embed);
    });
}