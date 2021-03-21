console.log('--------------------------------');

console.log('Funkcijos');

console.log('--------------------------------');

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

console.log('--------------------------------');

function daugyba(a, b) {
    if (typeof a !== 'number' ) {
        return `Pirmas parametras turi buti skaiciaus tipo`;
    }
    // sutrumpintai-kitas variantas ('' + a === 'NaN' || Math.abs(a) === Infinity)
    // (isNaN(a) || a === Infinity || a === -Infinity)
    // (!isFinite(a)) - tikrina reiksmes uzbaigtuma
    if (!isFinite(a)) {
        return `Pirmasis skaicius turi buti normalus skaicius ir negali buti: ${a}`;
    }
    if (!isFinite(a)) {
        return `Antrasis skaicius turi buti normalus skaicius ir negali buti: ${b}`;
    }
    if (typeof b !== 'number') {
        return `Antras parametras turi buti skaiciaus tipo`;
    } 
    return a * b;
}

console.log(daugyba(5, 4));
console.log(daugyba(3, 2));
console.log(daugyba(1, 3));

console.log('--------------------------------');

function skaitmenuKiekisSkaiciuje(kintamasis) {
    let reiksme2 = 0;
    if (!isFinite(kintamasis) || typeof kintamasis === 'boolean' || typeof kintamasis !== 'number') {
        return 'Pateikta netinkamo tipo reiksme';
    }
    if (typeof kintamasis === 'number') {
        const konvertavimas = kintamasis.toString();
        
        for (let i = 0; i < konvertavimas.length; i++) {
            reiksme2++
        }
    if (kintamasis % 1 !==0) {
        reiksme2--
    }
    if (kintamasis < 0)
        reiksme2--
        return `Rezultatas: ${reiksme2}`
    } 
}

console.log(skaitmenuKiekisSkaiciuje(5.4));


/*
v2

function digits(skaicius) {
    // input validation
    if (typeof skaicius !== 'number') {
        return 'ERROR: turi buti skaiciaus tipas';
    }
    if (!isFinite(skaicius)) {
        return `ERROR: ${skaicius} nera normalus skaicius`;
    }

    // logic
    const tekstinisSkaicius = '' + skaicius;
    let skaitmenuKiekis = tekstinisSkaicius.length;

    // jei skaicius turi desimtaine dali, tai sumaziname 1 vienetu
    if (skaicius % 1 !== 0) {
        skaitmenuKiekis--;
    }

    // jei skaicius yra neigiamas, tai sumaziname 1 vienetu
    if (skaicius < 0) {
        skaitmenuKiekis--;
    }


    // return result
    return skaitmenuKiekis;
}

console.log(digits(true));
console.log(digits('asd'));
console.log(digits(NaN));
console.log(digits(Infinity));
console.log(digits(-Infinity));
console.log(digits());
console.log(digits(undefined));
console.log(digits(null));
console.log(digits([]));
console.log(digits(''));
console.log(digits([4624]));
console.log(digits(digits));

console.log(digits(5), '->', 1);
console.log(digits(781), '->', 3);
console.log(digits(37060123456), '->', 11);
console.log(digits(3.1415), '->', 5);
console.log(digits(+3.1415), '->', 5);
console.log(digits(-456), '->', 3);
console.log(digits(-3.1415), '->', 5);

console.log('Koks sprendimas norint rasti standartines skaiciaus israiskos "turimu" skaitmenu kieki?');
console.log(digits(100000000000000000000000000000000000000000000000000), '->', 51);
console.log(digits(100000000000000000000000000000), '->', 30);
console.log(digits(0.00000000000000000000000000001), '->', 30);

*/

console.log('--------------------------------');

//Math.max/min(...[1,2,3]) gali is array istraukti skaicius ir surasti didziausia/maziausia skaiciu liste

function didziausiasSkaiciusSarase(variable) {
    if (Array.isArray(variable) === false) {
       return 'Pateikta netinkamo tipo reiksme';
    }
    if (variable.length === 0) {
        return 'Pateiktas sarasas negali buti tuscias';
    }  

    let biggest = -Infinity;
    for (let i = 0; i < variable.length; i++) {
        const number = variable[i];

        // ar tai normalus skaicius
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;            // eina i sekancia ciklo iteracija
        }

        // ar jis didesnis uz jau zinoma didziausia skaiciu
        if (number > biggest) {
            biggest = number;
        }
    }

    // logic validation
    if (biggest === -Infinity) {
        return 'ESarase nerastas nei vienas normalus skaicius';
    }
    return biggest;
}  

console.log(didziausiasSkaiciusSarase([8, 200, 905]));

/* v2

function bigNum(list) {
    // input validation
    if (!Array.isArray(list)) {
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
    }
    if (list.length === 0) {
        return 'ERROR: array is empty';
    }

    // logic
    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];

        // ar tai normalus skaicius
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;            // eina i sekancia ciklo iteracija
        }

        // ar jis didesnis uz jau zinoma didziausia skaiciu
        if (number > biggest) {
            biggest = number;
        }
    }

    // logic validation
    if (biggest === -Infinity) {
        return 'ERROR: sarase nerastas nei vienas normalus skaicius';
    }

    // result
    return biggest;
}

// console.log(bigNum('pomidoras'));
// console.log(bigNum(484562));
// console.log(bigNum(true));
// console.log(bigNum(false));
// console.log(bigNum(undefined));
// console.log(bigNum());
// console.log(bigNum(bigNum));
// console.log(bigNum(null));
// console.log(bigNum({}));
// console.log(bigNum([]));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([-11, -2, -35, -4, -5, -6, -7, -8]), '->', -2);

console.log(bigNum([1, 8, 3, 5, Infinity]), '->', 8);
console.log(bigNum([1, 8, Infinity, 3, 5]), '->', 8);
console.log(bigNum([Infinity, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, 'pomidoras']), '->', 8);
console.log(bigNum([1, 8, 'pomidoras', 3, 5]), '->', 8);
console.log(bigNum(['pomidoras', 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, true]), '->', 8);
console.log(bigNum([1, 8, true, 3, 5]), '->', 8);
console.log(bigNum([true, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, null]), '->', 8);
console.log(bigNum([1, 8, null, 3, 5]), '->', 8);
console.log(bigNum([null, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, undefined]), '->', 8);
console.log(bigNum([1, 8, undefined, 3, 5]), '->', 8);
console.log(bigNum([undefined, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, NaN]), '->', 8);
console.log(bigNum([1, 8, NaN, 3, 5]), '->', 8);
console.log(bigNum([NaN, 1, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, '']), '->', 8);
console.log(bigNum([1, 8, '', 3, 5]), '->', 8);
console.log(bigNum(['', 1, 8, 3, 5]), '->', 8);

console.log(bigNum([Infinity, null, 'sads', true, 888]), '->', 888);
console.log(bigNum([Infinity, null, 888, 'sads', true]), '->', 888);
console.log(bigNum([888, Infinity, null, 'sads', true]), '->', 888);

console.log(bigNum(['888', Infinity, null, 'sads', true]));

// recursion
console.log(bigNum([-5, 78, [14, 999], 0, 18]), '->', 999);

*/

console.log('--------------------------------');

function isrinktiRaides(tekstas, raide) {
    if (typeof tekstas !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo';
    }
    else if (tekstas.length === 0 || tekstas.length > 100) {
        return 'Pirmojo kintamojo reiksme yra netinkamo dydzio';
    }
    else if (typeof raide !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo';
    }
    else if (raide <= 0) {
        return 'Antrasis kintamasis turi buti didesnis uz nuli';
    }
    else if (raide > tekstas.length) {
        return 'Antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi';
    }
    else if (raide % 1 !== 0) {
        return 'Antrasis kintamasis turi buti sveikas skaicius';
    }
    else {
        let raides = '';
            if (raide> 0) {
                for (let i = raide - 1; i < tekstas.length; i += raide) {
                    raides += tekstas[i];
                }
            } else {
                for (let i = tekstas.length + raide; i >= 0; i += raide) {
                    raides += tekstas[i];
                }
            }
        return `Rezultatas = ${raides}`; 
        }
}

console.log(isrinktiRaides('abcd', 2));

console.log('--------------------------------');