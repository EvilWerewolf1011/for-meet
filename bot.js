console.log('beep beep!');

require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('read',readyDiscord);

function readyDiscord(){

    console.log('😍');

}

const replies = [

'meet stupid',
'meet is dum',
'meet stupid',
'meet nikal'

]


client.on ('message',gotMessage);

function gotMessage(msg)
{

    if(msg.channel.id === '798512772479844395' && msg.content === 'hyper'){

        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }

}