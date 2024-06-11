/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */



import {maxBy} from './e17';

export function getGreatestDiscoveryYear(data) {
	const yearCounts = {};

	for (let i = 0; i < data.asteroids.length; i++) {
		const asteroid = data.asteroids[i];
		const year = asteroid.discoveryYear;
		if (yearCounts[year]) {
			yearCounts[year]++;
		} else {
			yearCounts[year] = 1;
		}
	}
	const maxYear = maxBy(Object.keys(yearCounts), (year) => yearCounts[year]);

	return parseInt(maxYear);
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
