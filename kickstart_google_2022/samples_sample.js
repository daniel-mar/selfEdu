'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

// String variable that is empty
let inputString = '';
// establish current line at 0
let currentLine = 0;

// Grab user input and append it to the String variable that was empty.
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

// trim() - Remove the whitespaces(aka:spaces)
// .split('\n') - Store array of every new line feed.
// NOTE: .split('\r\n') - \r is carriage return. 
    // When using it as \r\n returns the cursor to the beginning of the same line.
        // Useful in both UNIX and Windows.
    // Similar to how a typewriter goes to the beginning when adding a new line.
    // Without advancing to the next line. Whereas a Line Feed feeds a new line.
// .map() - creates a new array, may except a parameter for the new array as well
    // NOTE: array1.map(x => x * 2); - the new array will receive x 
        // and return with perform x*2
// .map(string => {return string.trim();});  
    // will remove the white spaces from both ends and returns a new string,
        // without modifying the original string.
// The following is read as trimming the white space, then splitting into an array
    // at each new line. Then, mapping a new array after trimming any whitespace.
    // that may have come from the splitting by line breaks (\n).
process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    // calls the main function
    main();
});

function readline() {
    return inputString[currentLine++];
}

// Make a Snippet for the code above this and then write your logic in main();

function main() {
    // Declare and read the number of test cases.
    var T;
    T = parseInt(readline());

    // Loop over the number of test cases.
    for (var test_no = 1; test_no <= T; test_no++) {
        process.stdout.write('Case #' + test_no + ': ');
        solve();
    }
}

function solve() {
    // Declare variables N and M.
    var N, M;
    // Read the integers from the standard input.
    [N, M] = readline().split(' ').map(x => parseInt(x));

    // Declare array `C`.
    var C;
    // Read integers from the standard input and save them in the array `C`.
    C = readline().split(' ').map(x => parseInt(x));

    // Declare a variable for sum and set it to 0.
    var sum = 0;
    // Loop through vector `C` and sum its values.
    for (var i = 0; i < N; i++) {
        sum += C[i];
    }

    // Compute the value of the sum modulo M.
    var modulo = sum % M;

    // Print the result onto the standard output.
    process.stdout.write(modulo + '\n');
}