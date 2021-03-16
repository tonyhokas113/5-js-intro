console.log('--------------------------------');

const abc = 'abcdef';
const ilgis = abc.length;
const paskutineraide = ilgis - 1;
console.log(paskutineraide);

let raide2 = '';

for (let i = paskutineraide; i >= 0; i--) {
    raide2 += abc[i]
    let rezultatas = raide2;
    console.log(rezultatas);
}

