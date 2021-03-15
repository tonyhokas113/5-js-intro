console.log('Kintamuju inicijavimas');

console.log('--------------------------------');

console.log(1);
console.log(2);
console.log(3);

console.log('--------------------------------');

console.log('a');
console.log('b');
console.log('c');

console.log('--------------------------------');

const skaiciai1 = [1, 2, 3, 4, 5];
console.log(skaiciai1);

const skaiciai2 = [6, 7, 8, 9, 10];
console.log(skaiciai2);

const skaiciai3 = [11, 12, 13, 14, 15];
console.log(skaiciai3);

console.log('--------------------------------');

const raides1 = ['a', 'b', 'c', 'd', 'e'];
console.log(raides1);

const raides2 = ['f', 'g', 'h', 'i', 'j'];
console.log(raides2);

const raides3 = ['l', 'k', 'm', 'n', 'o'];
console.log(raides3);

console.log('--------------------------------');

console.log('Veiksmai su kintamaisiais');

console.log('--------------------------------');

const pirmas = 1;
const antras = 2;
const trecias = 3;
const suma = pirmas + antras + trecias;
console.log(pirmas + ' + ' + antras + ' + ' + trecias + ' = ' + suma);

console.log('--------------------------------');

const pirmar = 'a';
const antrar = 'b';
const treciar = 'c';
console.log(pirmar, antrar ,treciar);

console.log('--------------------------------');

const skaiciuverte1 = skaiciai1[0 - 1 + 2 - 3 + 4];
console.log(skaiciuverte1);

const pirm = skaiciai1[0];
const antr = skaiciai1[1];
const trec = skaiciai1[2];
const ketv = skaiciai1[3];
const penk = skaiciai1[4];
const suma1 = pirm - antr + trec - ketv + penk;
const veiksmai1 = pirm + ' - ' + antr + ' + ' + trec + ' - ' + ketv + ' + ' + penk + ' = ' + suma1;
console.log(veiksmai1);

console.log('--------------------------------');

const skaiciuverte2 = skaiciai2[0 - 1 + 2 - 3 + 4];
console.log(skaiciuverte2);

const pirma = skaiciai2[0];
const antra = skaiciai2[1];
const treci = skaiciai2[2];
const ketvi = skaiciai2[3];
const penkt = skaiciai2[4];
const suma2 = pirma - antra + treci - ketvi + penkt;
const veiksmai2 = pirma + ' - ' + antra + ' + ' + treci + ' - ' + ketvi + ' + ' + penkt + ' = ' + suma2;
console.log(veiksmai2);

console.log('--------------------------------');

const skaiciuverte3 = skaiciai3[0 - 1 + 2 - 3 + 4];
console.log(skaiciuverte3);

const pir = skaiciai3[0];
const ant = skaiciai3[1];
const tre = skaiciai3[2];
const ket = skaiciai3[3];
const pen = skaiciai3[4];
const suma3 = pir - ant + tre - ket + pen;
const veiksmai3 = pir + ' - ' + ant + ' + ' + tre + ' - ' + ket + ' + ' + pen + ' = ' + suma3;
console.log(veiksmai3);

console.log('--------------------------------');

const a = raides1[0];
const b = raides1[1];
const c = raides1[2];
const d = raides1[3];
const e = raides1[4];
console.log(a + ', ' + b + ', ' + c + ', ' + d + ', ' + e);

const f = raides2[0];
const g = raides2[1];
const h = raides2[2];
const i = raides2[3];
const j = raides2[4];
console.log(f + ', ' + g + ', ' + h + ', ' + i + ', ' + j);

const l = raides3[0];
const k = raides3[1];
const m = raides3[2];
const n = raides3[3];
const o = raides3[4];
console.log(l + ', ' + k + ', ' + m + ', ' + n + ', ' + o);

console.log('--------------------------------');

console.log('Kintamuju palyginimas');

console.log('--------------------------------');

const sk1 = 10;
const sk2 = 20;

if (sk1 > sk2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (sk1 < sk2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (sk1 === sk2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (sk1 !== sk2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (sk1 >= sk2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (sk1 <= sk2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

console.log('--------------------------------');

const tekstas1 = 'tekstoilgisplius';
const tekstas2 = 'tekstoilgis';
const ilgis1 = tekstas1.length;
const ilgis2 = tekstas2.length;
console.log(ilgis1);
console.log(ilgis2);

if (ilgis1 > ilgis2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (ilgis1 < ilgis2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (ilgis1 === ilgis2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (ilgis1 !== ilgis2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (ilgis1 >= ilgis2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (ilgis1 <= ilgis2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

console.log('--------------------------------');

const sarasas1 = skaiciai1.length;
console.log(sarasas1);

const sarasas2 = skaiciai2.length;
console.log(sarasas2);

if (sarasas1 > sarasas2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (sarasas1 < sarasas2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (sarasas1 === sarasas2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (sarasas1 !== sarasas2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (sarasas1 >= sarasas2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

if (sarasas1 <= sarasas2) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

console.log('--------------------------------');

console.log('Ciklo for panaudojimas');

console.log('--------------------------------');