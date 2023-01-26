const path = require("path");

function getMessages(req, res) {
	res.sendFile(
		path.join(__dirname, "..", "public", "images", "skimountain.jpg")
	);
	// res.send("<ul><li>Gravity is great</li><li>See light</li></ul>");
}

function postMessage(req, res) {
	console.log("Updating messages...");
}

module.exports = { getMessages, postMessage };
