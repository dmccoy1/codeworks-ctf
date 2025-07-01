function toUnicode(text) {
    const unicodeArray = [];
    for (let i = 0; i < text.length; i++) {
    unicodeArray.push(text.charCodeAt(i)); // Get the Unicode value of each character
}
    return `(${unicodeArray.join(',')})`; // Join the array with commas and wrap in parentheses
}

/* Example usage:
const inputText = "Hello World!";
const unicodeValues = toUnicode(inputText);
console.log(unicodeValues); // Output: (72,101,108,108,111,32,87,111,114,108,100,33)*/

const ip = "192.168.40.239";
const user = "cits";
const pass = 'hackingisfun';
const genIP = toUnicode(ip);
const genUser = toUnicode(user);
const genPass = toUnicode(pass); 
console.log(`ip:${genIP}`);
console.log(`user:${genUser}`);
console.log(`pass:${genPass}`);




