function toCase(str) {
    if (!str) return "-"; // Handles null, undefined, or empty string
    return str.toLowerCase() + "-" + str.toUpperCase();
}

// Do not change the code below
const input = prompt("Enter a string:");
alert(toCase(input));

 