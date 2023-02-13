const fs = require('fs');


// menuliskan string ke file secara synchronous
// try {
//     fs.writeFileSync('data/test.txt', 'Hello world');
// } catch (e) {
//     console.log(e);
// }

// menuliskan string ke file secara asynchronous
// fs.writeFile('data/data.txt', 'Hello world asynchronous', (e) => {
//     console.log(e);
// }) 

// membaca file mengunakan synchronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca file mengunakan asynchcronous
// const data = fs.readFile('data/data.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// // readline
const readline = require('node:readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Siapakah Nama Anda ? : `, (jawabNama) => {
    rl.question(`Masukan alamat anda : `, (jawabAlamat) => {
        rl.question(`Masukan nomor telepon anda : `, (jawabTelepon) => {
           const data = { jawabNama, jawabAlamat, jawabTelepon};
            const file =  fs.readFileSync('data/contacts.json', 'utf8');
            const files = JSON.parse(file);
            
            files.push(data);
            
            fs.writeFileSync('data/contacts.json', JSON.stringify(files))
            console.log(`Terima kasih`)

            rl.close();
        })
    })
    
});

