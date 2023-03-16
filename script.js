//NO 1
function cetakFunction(a){
    return `nama saya ` + a
}

console.log(cetakFunction("al"));

//NO 2
let angka1 = 20;
let angka2 = 7;

function myFunction(a,b){
    return a + b;
}
let output = myFunction(angka1,angka2)
console.log(output);

//NO 3
function Hello(){
    let a = "Hello";
    return "Hello ";
}
let jim = Hello((bro) => bro.a === "Hello");
console.log(jim);

// console.log(Hello("a"));

//NO 4
let obj = {
    nama : "John",
    umur : 22,
    bahasa : "indonesia"
}
console.log(obj.bahasa);

//NO 5
let arrayDaftarPeserta = ["John Doe", "Laki-laki", "baca buku", 1992]
let objectDaftarPeserta ={
    nama : arrayDaftarPeserta[0],
    kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahun : arrayDaftarPeserta[3],
}
console.log(objectDaftarPeserta);

//NO 6
let buah = [{
    nama : 'nanas',
    warna : 'kuning',
    adaBijinya : 'tidak',
    harga : 9000,
},
{
    nama : 'jeruk',
    warna : 'oranye',
    adaBijinya : 'ada',
    harga : 8000,
},
{
    nama : 'semangka',
    warna : 'hijau & merah',
    adaBijinya : 'ada',
    harga : 10000,
},
{
    nama : 'pisang',
    warna : 'kuning',
    adaBijinya : 'tidak',
    harga : 3000,
}
]
let berbiji = buah.filter((buah) => buah.adaBijinya === 'tidak');

console.log(berbiji);
