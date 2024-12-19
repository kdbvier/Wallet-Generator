const { generateKeystore } = require('ethereum-keystore')
const readlineSync = require('readline-sync')
const {ethers} = require('ethers');
const fs = require('fs')
async function main() {
    let secret = readlineSync.question('What is your key? ', {hideEchoBack: true});  
    const newWallet = ethers.Wallet.createRandom();
    const keyStore = await generateKeystore(newWallet.privateKey, secret);
    fs.writeFile('./data.json', JSON.stringify(keyStore), err => {  
        if (err) {  
            console.log('Error writing file', err);  
        } else {  
            console.log('Successfully wrote file');  
        }  
    }); 
}
main()