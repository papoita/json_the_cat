/** @format */
/**
 * @TODO handle errors
 */
const net = require("net");

// 20211120001403
// https://api.thecatapi.com/v1/breeds/search
// Request Header
// The best & most secure way to send it
// Set your API Key as the x-api-key header on evey request.
// e.g headers[“x-api-key”] = "ABC123"

const request = require("request");
const fs = require("fs");
const urlInput = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`; //sib for siberian
//https://api.thecatapi.com/v1/breeds/search?q=sib
//if user inputs siberian instead of sib then the process.argv.slice(0,4);
const path = process.argv[3];

request(urlInput, (error, response, body) => {
	console.log("error:", error);
	// Print the error if one occurred
	console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
	console.log("body:", body); // Print the HTML for the Google homepage.
	const data = JSON.parse(body);
	console.log(data);
	console.log(typeof data);
	if (data[0]) {
		console.log(data[0].description);
	} else {
		console.log(`cat breed not found`);
	}
	if (!error) {
		fs.writeFile(path, body, "utf8", request, (err) => {
			console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
			if (err) throw err;
		});
	}
});
