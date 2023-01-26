function getMessages(req, res) {
	res.send("<ul><li>Gravity is great</li><li>See light</li></ul>");
}

function postMessage(req, res) {
	console.log("Updating messages...");
}

module.exports = { getMessages, postMessage };
