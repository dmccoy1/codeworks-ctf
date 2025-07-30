function toUnicode(text) {
    const unicodeArray = [];
    for (let i = 0; i < text.length; i++) {
    unicodeArray.push(text.charCodeAt(i)); // Get the Unicode value of each character
}
    return `(${unicodeArray.join(',')})`; // Join the array with commas and wrap in parentheses
}
 //Example usage:
const inputText = "";
const unicodeValues = toUnicode(inputText);
console.log(unicodeValues); 







