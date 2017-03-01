var irc = require("irc");
var botCue = "-";
var config = {
	channels: ["#quantumDrop"],
	server: "irc.chat.twitch.tv",
	oauth: "oauth:",
	botName: "SocialMediaHelperBot",
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

function displayCommands(from, channel, text, message){
	text = text.toLowerCase()
	if (text == botCue + "help" || text == botCue + "h") {
		botClient.send("PRIVMSG", channel, "__Commands list__");
		botClient.send("PRIVMSG", channel, "	-h/help : Display commands list");
		botClient.send("PRIVMSG", channel, "	-h/help : Display commands list");
	}
}

function socialMedia(from, channel, text, message)
{
	if (text.toLowerCase() == botCue + "facebook") {
		botClient.send("PRIVMSG", channel, "Test successful");
	} else if (text.toLowerCase() == botCue + "twitter") {
		botClient.send("PRIVMSG", channel, "Test successful");
	} else if (text.toLowerCase() == botCue + "youtube") {
		botClient.send("PRIVMSG", channel, "Test successful");
	} else if (text.toLowerCase() == botCue + "instagram") {
		botClient.send("PRIVMSG", channel, "Test successful");
	} else if (text.toLowerCase() == botCue + "linkedIn") {
		botClient.send("PRIVMSG", channel, "Test successful");
	} else if (text.toLowerCase() == botCue + "twitch") {
		botClient.send("PRIVMSG", channel, "Test successful");
	} else if (text.toLowerCase() == botCue + "email") {
		botClient.send("PRIVMSG", channel, "Test successful");
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




