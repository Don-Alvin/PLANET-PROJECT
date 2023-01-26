const express = require("express");
const app = express();

const PORT = 3000;

const friends = [
	{
		id: 1,
		name: "Isaac Newton",
	},

	{
		id: 2,
		name: "Nikola Tesla",
	},
];

app.get("/", (req, res) => {
	res.status(200).send("This is the home page");
});

app.get("/friends", (req, res) => {
	res.status(200).send(friends);
});

app.get("/friends/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const friend = friends[id];

	if (friend) {
		res.status(200).json(friend);
	} else {
		res.status(400).json({
			Error: "No such friend exists",
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});
