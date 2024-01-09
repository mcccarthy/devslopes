/** @format */

import {data} from '../data/data';

// SPACE DATA EXERCISE 9
// Return the data object of the planet "Earth"
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getEarthData(data) {
	// Check if 'data' has a 'planets' property and if it's an array
	if (data.planets && Array.isArray(data.planets)) {
		// Find the planet object where the 'name' property equals 'Earth'
		const earthData = data.planets.find(
			(planet) => planet.name === 'Earth'
		);
		// Return the found Earth data, or null if Earth is not found
		return earthData || null;
	} else {
		// If the structure is not as expected, return null or an empty object
		return null; // or return {};
	}
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
