const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});




const Discord = require ("discord.js")
const moment = require ("moment")
const jano = new Discord.Client();
const prefix = "w!";


tony.login("Nzk5MjI4MTc5Nzg0Nzk0MTgz.YAAhPw.G1toaOZWt7G_qGob9xqSoGA96co");
tony.on("ready", async () => {
  console.log(`Logged in as ${tony.user.username}!`);
 tony.user.setStatus("ONLINE");
  tony.user.setActivity(`${prefix}help`, { type: "WATCHING" });
 tony.guilds.cache.forEach(g => {
    if (g.member(tony.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////

tony.on("message", message => {
if (message.content === prefix +"help") {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setThumbnail("https://media.tenor.com/images/85500641e177bccfc805cac8a2805e3f/tenor.gif")
.setAuthor("Prefix [ j! ]","https://i.imgur.com/Y9N3OCy.gif?noredirect")
.setDescription(` 
**
𝐖𝐞𝐥𝐜𝐨𝐦𝐞 [change channel]
𝐋𝐞𝐟𝐭 [change channel]
**
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=799228179784794183&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/3wykSpqjZq)**
 `)
    
    .setFooter(` welcome bot ✨ | Coded by , tony`, tony.user.avatarURL)
    .setURL("https://discord.gg/3wykSpqjZq")
      
    message.channel.send(embed);
      message.react("");
  }
});
//////////////

/////////// code welcome
tony.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "𝐖𝐞𝐥𝐜𝐨𝐦𝐞"
  );
  let tony = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(
      `**A new member just arrived**`
    )
    .setColor("RANDOM")
    .setThumbnail(tony)
    .addField(
      "| **name** : ",
      `${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "| **Welcome**",
      `Welcome to the server, ${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "| **User** :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "| **Your are the member**",
      `${member.guild.memberCount}
      · · • • • ✤ • • • · ·`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setImage(
      "https://media.discordapp.net/attachments/806608889805537309/808492139172200458/ImpracticalFearfulEsok-max-1mb.gif"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
////////////// code left
tony.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "𝐋𝐞𝐟𝐭"
  );
  let tony = member.user.avatarURL();
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
    .setTitle(
      `left`
    )
    .setImage(
      "https://thumbs.gfycat.com/ChiefBiodegradableAmericanalligator-size_restricted.gif"
    )
    .setColor("RANDOM")
    .setThumbnail(tony)
    .addField("👥|𝐍𝐀𝐌𝐄:", `${member}`)
    .addField("├baxerche mle shkaw┤", `!`)
    .addField("✶⊶⊷⊶⊷❍⊶⊷⊶⊷✶;(",   "")
    .addField(
      "⳺☟مــیــمــبەرەکــان ماوە⳻",
      `${member.guild.memberCount}` + " ڪــەس"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  channel.send(joinembed);
});
/////////////// code embed
tony.on("guildMemberAdd", member => {
  const joinembed = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      `__**A new member just arrived!**__`
    )
    .addField(
      "| name : ",
      `${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "| Welcome",
      `Welcome to the server, ${member}
    · · • • • ✤ • • • · ·`
    )
    .addField(
      "| User :",
      "**[" + `${member.id}` + "]**"
    )
    .addField(
      "| Your are the member",
      `${member.guild.memberCount}
      · · • • • ✤ • • • · ·`
    )
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()
    .setImage(
      "https://media.discordapp.net/attachments/806608889805537309/808492139172200458/ImpracticalFearfulEsok-max-1mb.gif"
    )
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  member.send(joinembed);
});
/////////////////
