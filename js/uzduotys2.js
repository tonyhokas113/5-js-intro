console.log('--------------------------------');

console.log('Vilkas');

console.log('--------------------------------');

// v1

const aplinkybes = 'vilko nera';

if (aplinkybes === 'lauke sviecia') {
    console.log('Pasiimk kepure nuo saules');
} else if(aplinkybes === 'lauke nesviecia') {
    console.log('Gali kepures neimti');
} else if(aplinkybes === 'lyja') {
    console.log('Pasiimk sketi');
} else if(aplinkybes === 'nelyja') {
    console.log('Sketis nereikalingas');
} else if(aplinkybes === 'stovi vilkas') {
    console.log('Bek kiek kojos nesa');
} else if(aplinkybes === 'vilko nera') {
    console.log('Gali buti ramus, vilko nera..');
} else {
    console.log('Tokia aplinkybe nera numatyta');
}

// v2 Switch

switch (aplinkybes) {
    case 'lauke sviecia':
        console.log('Negauk saules smugio');
        break;
    case 'lauke nesviecia':
        console.log('Nepersalk');
        break;
    case 'lyja':
        console.log('Pasiimk lietpalti');
        break;
    case 'nelyja':
        console.log('Lietpaltis nereikalingas');
        break;
    case 'stovi vilkas':
        console.log('Pasiimk saunamaji ginkla');
        break;
    case 'vilko nera':
            console.log('Tavo laime');
        break;
    default:
        console.log('Tokios aplinkybes nera');
        break;
}

console.log('--------------------------------');

console.log('Ciklo for panaudojimas');

console.log('--------------------------------');

let suma = 0;

for (let i = 0; i <= 0; i++) {
    suma += i;
    console.log(`Ciklas : ${i},  Suma: ${suma} `);
}

console.log('..........');

let summ = 0;

for (let i = 0; i <= 4; i++) {
    summ += i;
    console.log(i, summ);
}

    const atsakymas = `Atsakymas: ${summ}`
    console.log(atsakymas);

console.log('..........');

let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
    console.log(i, sum);
}

    const atsakymas1 = `Atsakymas: ${sum}`
    console.log(atsakymas1);

console.log('..........');

let sumele = 0;

for (let i = 574; i <= 815; i++) {
    sumele += i;
    console.log(`Ciklas : ${i},  Suma: ${sumele} `);
}

console.log('..........');

let sum1 = 0;

for (let i = -50; i <= 50; i++) {
    sum1 += i;
    console.log(`Ciklas : ${i},  Suma: ${sum1} `);
}

console.log('..........');

let sum2 = 0;

for (let i = -70; i <= 30; i++) {
    sum2 += i;
    console.log(`Ciklas : ${i},  Suma: ${sum2} `);
}

console.log('--------------------------------');

const abc = 'abcdef';
const ilgis = abc.length;
const paskutineraide = ilgis - 1;
console.log(paskutineraide);

let raide2 = '';

for (let i = paskutineraide; i >= 0; i--) {
    raide2 += abc[i]
}

let rezultatas = raide2;
console.log(rezultatas);

console.log('--------------------------------');

// v2

for (let i = 5; i >= 0; i--) {
    const raide2 = abc[i]
} 

console.log(raide2);

console.log('--------------------------------');

let raide = '';

for (let i = 0; i < abc.length; i++) {
    raide += abc[i];
}

    console.log(raide);

console.log('--------------------------------');

const nuo = 0;
const iki = 11;
const daliklis = 7;

let skaicius = 0;

for (let i = nuo; i <= iki; i++) {
    const result = i;
    const dalyba = i % daliklis;
    console.log(dalyba);
    if (i % daliklis === 0) {
        skaicius++;
    }
}

const answer = `Skaičių intervale tarp ${nuo} ir ${iki}, 
besidalijančių be liekanos iš ${daliklis} yra ${skaicius} vienetai.`

  console.log(answer);
