const http = require("http");

const server = http.createServer();

const friends = [
	{
		id: 0,
		name: "Abraham Enstein",
	},

	{
		id: 1,
		name: "Isaac Newton",
	},
];

server.on("request", (req, res) => {
	const items = req.url.split("/");

	if (req.method === "POST" && items[1] === "friends") {
		req.on("data", (data) => {
			const friend = data.toString();
			console.log("Request:", data);
			friends.push(JSON.parse(friend));
			req.pipe(res);
		});
	} else if (req.method === "GET" && items[1] === "friends") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "application/json");
		if (items.length === 3) {
			const friendIndex = Number(items[2]);
			res.end(JSON.stringify(friends[friendIndex]));
		} else {
			res.end(JSON.stringify(friends));
		}
	} else if (req.method === "GET" && items[1] === "messages") {
		res.write(
			`<html>
                <body>
                    <ul>
                        <li>Hello Isaac!</li>
                        <li>What are your thoughts on Astronomy</li>
                    </ul>
                </body>
             </html>`
		);
		res.end();
	} else {
		res.statusCode = 400;
		res.end();
	}

	console.log(items);
});

server.listen(5000, () => {
	console.log("Server running on port 5000");
});
