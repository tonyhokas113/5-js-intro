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
    let secondBiggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];

        // ar tai normalus skaicius
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;            // eina i sekancia ciklo iteracija
        }

        // ar jis didesnis uz jau zinoma didziausia skaiciu
        if (number > biggest) {
            secondBiggest = biggest;
            biggest = number;
        }
        else if (number > secondBiggest && number < biggest) 
            secondBiggest = number
    }

    // logic validation
    if (secondBiggest === -Infinity) {
        return 'Sarase nerastas nei vienas normalus skaicius';
    }

    // result
    return secondBiggest;
}


console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([-11, -2, -35, -4, -5, -6, -7, -8]), '->', -2);

