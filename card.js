
let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function spliceTab(array) {
    let test = array.splice(0, 4);
    return test
}

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}


let randomCards = getMultipleRandom(cards, cards.length);
let franck = spliceTab(randomCards);
let tom = spliceTab(randomCards);
let sam = spliceTab(randomCards);

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

console.log(`Franck possède la combinaison suivante : ${franck}`);
console.log(`Tom possède la combinaison suivante : ${tom}`);
console.log(`Sam possède la combinaison suivante : ${sam}`);

