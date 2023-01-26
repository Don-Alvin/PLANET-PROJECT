const model = require("../models/friends.models");

function postFriend(req, res) {
	if (!req.body.name) {
		return res.status(400).json({
			error: "Missing friend name",
		});
	}

	const newFriend = {
		id: model.length,
		name: req.body.name,
	};

	model.push(newFriend);
	res.json(model);
}

function getFriends(req, res) {
	res.status(200).send(model);
}

function getFriend(req, res) {
	const id = parseInt(req.params.id);
	const friend = model[id];

	if (friend) {
		res.status(200).json(friend);
	} else {
		res.status(400).json({
			Error: "No such friend exists",
		});
	}
}

module.exports = { postFriend, getFriend, getFriends };
