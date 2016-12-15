var irc = require("irc");
var config = {
	channels: ["#quantumDrop", "#dudebrowut", "#yougamebropodcast"],
	server: "irc.chat.twitch.tv",
	oauth: "oauth:vkadhswpi6vv5rwyulif7eeveblv9n",
	botName: "gordoTheCat",
	autoRejoin: false,
	autoConnect: true,
	floodProtection: true,
	floodProtectionDelay: 3000
};

var botClient = new irc.Client(config.server, config.botName, {
	channels: config.channels,
	password: config.oauth
});

function join(channel, nick, msgobj)
{
	if (nick.toLowerCase() == config.botName.toLowerCase())
	{
		console.log("Bot has joined channel", channel);
		botClient.send("PRIVMSG" , channel, "haha");
	}
}


function msg(from, channel, text, message)
{
	// console.log(from, channel, text, message);
	if (text == "test") {
		console.log(channel + " - input: test - output: Test successful");
		botClient.send("PRIVMSG" , channel, "Test successful");
	} else if (text == "public") {
		console.log(channel + " - input: public - output: Public announcement username");
		botClient.say(channel, "Public announcement " + from + ".");
	} else if (text.toLowerCase().includes("lol")){
		console.log(channel + " - input: lol - output: ikr.haha");
		botClient.say(channel, "ikr. haha");
	} else if (text.toLowerCase().includes("haha")){
		console.log(channel + " - input: haha - output: hahah");
		botClient.say(channel, "hahah");
	}
}


function err(message)
{
	console.log("Error: ", message);
}

botClient.addListener("message", msg);
botClient.addListener("action", msg);
botClient.addListener("join", join);
botClient.addListener("error", err);




