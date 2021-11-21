/** @format */
/**
 * @TODO handle errors with callbacks request support from mentor
 */

// 20211120001403
// https://api.thecatapi.com/v1/breeds/search
// Request Header
// The best & most secure way to send it
// Set your API Key as the x-api-key header on evey request.
// e.g headers[“x-api-key”] = "ABC123"

const request = require("request");

//const breedName = process.argv[2];

const fetchBreedDescription = function (breedName, callback) {
	request(
		`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
		(error, response, body) => {
			//console.log(response.statusCode);
			if (error) {
				callback(error, response.statusCode);

				return;
			}
			const data = JSON.parse(body);

			if (data[0]) {
				callback(null, data[0].description);
			} else {
				callback(null, `cat breed: ${breedName} not found`);
			}
		}
	);
};
module.exports = { fetchBreedDescription };
