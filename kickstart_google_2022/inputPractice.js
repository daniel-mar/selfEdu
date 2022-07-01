/** Testing User Input
 * 
 * Node.js program to demonstrate the
 * process.stdin Property
 */

// Example 1:
// Enter any texts ( User input)
// When running, allows you to type input and will console what you typed + entered
    // process.stdin.on('data', data => {
    //     console.log(`You typed ${data.toString()}`);
    //     process.exit();
    // });

// Example 2:
// Node.js program to demonstrate the
// process.stdin Property
// Allows unlimited user input, until CTRL + C to abort program.
process.stdin.on('readable', () => {
    let chunk;
    // Use a loop to make sure we read all available data.
    while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write(`data: ${chunk}`);
    }
});
