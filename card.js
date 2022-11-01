let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function spliceTab(array) {
    let test = array.splice(0, 4);
    return test
}

function getMultipleRandom(array, num) {
    const randomTab = [...array].sort(() => 0.5 - Math.random());
    return randomTab.slice(0, num);
}


//Code super méga hyper déguelasse xD mais le clean code va venir lol factoriser et tout ça

function turn(array) {
    if (array[1] == 0) {
        console.log(`${array[0]} possède la combinaison suivante : ${array[1]}, ${array[2]},${array[3]},${array[4]}`)
        console.log(` ${array[0]} va jouer en premier`);
        console.log(`${array[0]} joue la carte ${array[1]}`)
        array.splice(1, 1);
        console.log(` La combinaison de ${array[0]} est maintenant la suivante : ${array[1]}, ${array[2]},${array[3]}`)
    }
    setTimeout(() => {
        if (array[1] != 0) {
            console.log(`${array[0]} possède la combinaison suivante : ${array[1]}, ${array[2]},${array[3]},${array[4]}`);
            console.log(`${array[0]} joue son tour`)
            array.splice(1, 1);
            console.log(` La combinaison de ${array[0]} est maintenant la suivante : ${array[1]}, ${array[2]},${array[3]}`)
        }
    }, 500)
}


let randomCards = getMultipleRandom(cards, cards.length);
let franck = spliceTab(randomCards);
let tom = spliceTab(randomCards);
let sam = spliceTab(randomCards);

franck.unshift('Franck');
tom.unshift('Tom');
sam.unshift('Sam');

//Range les éléments du plus petit au plus grand
franck.sort(function (a, b) {
    return a - b;
});
tom.sort(function (a, b) {
    return a - b;
});
sam.sort(function (a, b) {
    return a - b;
});


turn(franck);
turn(tom);
turn(sam);

// console.log(`Franck possède la combinaison suivante : ${franck}`);
// // console.log(`Tom possède la combinaison suivante : ${tom}`);
// // console.log(`Sam possède la combinaison suivante : ${sam}`);

