const Discord = require("discord.js");
const client = new Discord.Client();

const TOKEN = process.env.TOKEN;
console.log(TOKEN);
const links = {
  "!demo": "https://jotform.com/zoom/demo",
  "!design": "https://jotform.com/zoom/design",
  "!growth": "https://jotform.com/zoom/growth",
  "!product": "https://jotform.com/zoom/product",
  "!hr": "https://jotform.com/zoom/hr",
  "!izmir": "https://jotform.com/zoom/izmir",
  "!marketing": "https://jotform.com/zoom/marketing",
  "!enterprise": "https://jotform.com/zoom/enterprise",
  "!strategy": "https://jotform.com/zoom/strategy",
  "!uxr": "https://jotform.com/zoom/uxr",
  "!widgets": "https://jotform.com/zoom/widgets",
  "!room1": "https://jotform.com/zoom/room1",
  "!room2": "https://jotform.com/zoom/room2"
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  switch (msg.content) {
    case "!demo":
      msg.reply(links["!demo"]);
      break;
    case "!design":
      msg.reply(links["!design"]);
      break;
    case "!growth":
      msg.reply(links["!growth"]);
      break;
    case "!product":
      msg.reply(links["!product"]);
      break;
    case "!hr":
      msg.reply(links["!hr"]);
      break;
    case "!izmir":
      msg.reply(links["!izmir"]);
      break;
    case "!marketing":
      msg.reply(links["!marketing"]);
      break;
    case "!enterprise":
      msg.reply(links["!enterprise"]);
      break;
    case "!strategy":
      msg.reply(links["!strategy"]);
      break;
    case "!uxr":
      msg.reply(links["!uxr"]);
      break;
    case "!widgets":
      msg.reply(links["!widgets"]);
      break;
    case "!room1":
      msg.reply(links["!room1"]);
      break;
    case "!room2":
      msg.reply(links["!room2"]);
      break;
  }
});

client.login(TOKEN);
