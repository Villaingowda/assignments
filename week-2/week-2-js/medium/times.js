/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // Start the timer
    const startTime = Date.now();
    // Calculate the sum from 1 to n
    let sum = 0;
    // Loop from 1 to n and calculate the sum
    for (let i = 1; i <= n; i++) {
        // Add i to the sum
        sum += i;
    }
    // End the timer
    const endTime = Date.now();
    // Calculate the time taken in seconds
    console.log(endTime - startTime);
}
// Calculate the time taken to sum from 1 to 100
calculateTime(100);
// Calculate the time taken to sum from 1 to 100000
calculateTime(100000);
// Calculate the time taken to sum from 1 to 1000000000
calculateTime(1000000000);


