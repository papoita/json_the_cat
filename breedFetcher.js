/** @format */

const net = require("net");

// 20211120001403
// https://api.thecatapi.com/v1/breeds/search
// Request Header
// The best & most secure way to send it
// Set your API Key as the x-api-key header on evey request.
// e.g headers[“x-api-key”] = "ABC123"
const data = JSON.parse(body);
console.log(data);
console.log(typeof data);

const request = require("request");
request("http://www.google.com", (error, response, body) => {
	console.log("error:", error); // Print the error if one occurred
	console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
	console.log("body:", body); // Print the HTML for the Google homepage.
});
