// Decode the credentials by using the `decoder` function.

// Hint: Look closely, it's more than just characters. 
const correctUser = [97, 100, 109, 105, 110];  
const correctPass = [104,97,99,107,105,110,103,105,115,102,117,110];
//const _pass = String.fromCharCode(104,97,99,107,105,110,103,105,115,102,117,110);

function decoder(creds) {
    let credentials = '';
    for (let i = 0; i < creds.length; i++) {
        credentials += String.fromCharCode(creds[i]);
    }
    return credentials;
}

// Your turn: Use decoder() to reveal the correct username and password.
console.log(decoder(correctUser));
console.log(decoder(correctPass));