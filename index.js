/** @format */

const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
	if (error) {
		console.log("Error fetch details:", error);
		console.log("status code", description);
	} else {
		console.log(description);
	}
});
