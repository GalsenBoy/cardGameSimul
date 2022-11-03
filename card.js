let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function spliceTab(array) {
    let test = array.splice(0, 4);
    return test
}

function getMultipleRandom(array, num) {
    const randomTab = [...array].sort(() => 0.5 - Math.random());
    return randomTab.slice(0, num);
}

function winner(array1, array2, array3) {
    let joueur1 = array1[array1.length - 1] + array1[array1.length - 2];
    let joueur2 = array2[array2.length - 1] + array2[array2.length - 2];
    let joueur3 = array3[array3.length - 1] + array3[array3.length - 2];

    if (joueur1 > joueur2 && joueur1 > joueur3) {
        return console.log(`${array1[0]} a gagné la partie`);
    }
    if (joueur2 > joueur1 && joueur2 > joueur3) {
        return console.log(`${array2[0]} a gagné la partie`);
    }
    if (joueur3 > joueur1 && joueur3 > joueur2) {
        return console.log(`${array3[0]} a gagné la partie`);
    }

}
//Code super méga hyper déguelasse xD mais le clean code va venir lol factoriser et tout ça

function turnZero(array) {
    if (array[1] == 0) {
        console.log(`${array[0]} possède la combinaison suivante : ${array[1]}, ${array[2]},${array[3]},${array[4]}`)
        console.log(` ${array[0]} va jouer en premier`);
        console.log(`${array[0]} joue la carte ${array[1]}`)
        array.splice(1, 1);
        console.log(` La combinaison de ${array[0]} est maintenant la suivante : ${array[1]}, ${array[2]},${array[3]}`)
    }
    // setTimeout(() => {
    //     if (array[1] != 0) {
    //         console.log(`${array[0]} possède la combinaison suivante : ${array[1]}, ${array[2]},${array[3]},${array[4]}`);
    //         console.log(`${array[0]} joue son tour`)
    //         array.splice(1, 1);
    //         console.log(` La combinaison de ${array[0]} est maintenant la suivante : ${array[1]}, ${array[2]},${array[3]}`)
    //     }
    // }, 500)
}

function turnOne(array) {
    setTimeout(() => {
        if (array.length > 4) {
            console.log(`${array[0]} possède la combinaison suivante : ${array[1]}, ${array[2]},${array[3]},${array[4]}`);
            console.log(`${array[0]} joue son tour`)
            array.splice(1, 1);
            console.log(` La combinaison de ${array[0]} est maintenant la suivante : ${array[1]}, ${array[2]},${array[3]}`)
        }
    }, 1)
}
function sort(array) {
    array.sort(function (a, b) {
        return a - b;
    });
}


let randomCards = getMultipleRandom(cards, cards.length);
let franck = spliceTab(randomCards);
let tom = spliceTab(randomCards);
let sam = spliceTab(randomCards);

franck.unshift('Franck');
tom.unshift('Tom');
sam.unshift('Sam');

//Range les éléments du plus petit au plus grand
sort(franck);
sort(tom);
sort(sam);

// //Premier joueur
// turnZero(franck);
// turnZero(tom);
// turnZero(sam);

// //Premier tour pour les autres
// turnOne(franck);
// turnOne(tom);
// turnOne(sam);

winner(franck, tom, sam);










// console.log(`Franck possède la combinaison suivante : ${franck}`);
// // console.log(`Tom possède la combinaison suivante : ${tom}`);
// // console.log(`Sam possède la combinaison suivante : ${sam}`);

