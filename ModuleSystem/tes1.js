// console.log('hay selamat datang');

function cetakNama(nama){
    return `hallo nama saya ${nama}`
}

const noTelepon = 0821972222;

const biodata = {
    nama: 'Michelle',
    umur: 22,
    suku: 'Sabu',
    printBiodata(){
        return `Perkenalkan nama saya ${this.nama} usia saya ${this.umur} dan saya orang ${this.suku}`
    }
}

class Search {
    constructor(){
        console.log(`sedang melakukan pencarian`);
    }
}
 
// module.exports.printCetakNama = cetakNama;
// module.exports.printNoTelepon = noTelepon;
// module.exports.biodata = biodata;
// module.exports.Search = Search

module.exports = {cetakNama, noTelepon, biodata, Search}