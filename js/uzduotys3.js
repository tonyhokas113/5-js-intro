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
    const reiksme = a * b;
    return reiksme;
    
}

console.log(daugyba(5, 4));
console.log(daugyba(3, 2));
console.log(daugyba(1, 3));

console.log('--------------------------------');

function skaitmenuKiekisSkaiciuje(kintamasis) {

    if (isNaN(kintamasis) || typeof kintamasis === 'boolean') {
        const zinute = 'Pateikta netinkamo tipo reiksme';
        return zinute;
    }
    else if (typeof kintamasis === 'number') {

        let reiksme2 = 0;
        const konvertavimas = kintamasis.toString();
        
        for (let i = 0; i < konvertavimas.length; i++) {
            reiksme2++
        }

        const ats = `Rezultatas: ${reiksme2}`
        return ats;
    } 
}

console.log(skaitmenuKiekisSkaiciuje(1));

console.log('--------------------------------');

//Ar galima naudoti keleta return reiksmiu funkcijoje, ar geriau naudoti console.log?

function didziausiasSkaiciusSarase(variable) {
    if (Array.isArray(variable) === false) {
       const message = 'Pateikta netinkamo tipo reiksme';
       return (message);
    } 
    else if (variable.length === 0) {
        const message2 = 'Pateiktas sarasas negali buti tuscias';
        return(message2);
    }
    else {
        let largest = variable[0];
        let highestNr;
        for (let i = 0; i < variable.length; i++) {
            highestNr = variable[i];
            largest = Math.max(largest, highestNr)
        }
        const answer = `Rezultatas: ${largest}`;
        return answer;
    }
}
console.log(didziausiasSkaiciusSarase([301, 200, 905]));

console.log('--------------------------------');

function isrinktiRaides(tekstas, raide) {
    if (typeof tekstas !== 'string') {
        const netinkamasTipas = 'Pirmasis kintamasis yra netinkamo tipo';
        return netinkamasTipas; 
    }
    else if (tekstas.length === 0 || tekstas.length > 100) {
        const netinkamasDydis = 'Pirmojo kintamojo reiksme yra netinkamo dydzio';
        return netinkamasDydis;
    }
    else if (typeof raide !== 'number') {
        const netinkamoTipo = 'Antrasis kintamasis yra netinkamo tipo';
        return netinkamoTipo;
    }
    else if (raide <= 0) {
        const kintamojoDydis = 'Antrasis kintamasis turi buti didesnis uz nuli';
        return kintamojoDydis;
    }
    else if (raide > tekstas.length) {
        const dydis = 'Antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi';
        return dydis;
    }
    else if (raide % 1 !== 0) {
        const sveikasis = 'Antrasis kintamasis turi buti sveikas skaicius';
        return sveikasis;
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
        const result = `Rezultatas = ${raides}`;
        return result;   
        }
}

console.log(isrinktiRaides('abcd', 2));

console.log('--------------------------------');

function dalyba(d, e) {
    
}