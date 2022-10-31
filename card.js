
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
let Pierre = spliceTab(randomCards);
let Jack = spliceTab(randomCards);
let Paul = spliceTab(randomCards);

console.log(`Pierre possède la combinaison suivante : ${Pierre}`);
console.log(`Jack possède la combinaison suivante : ${Jack}`);
console.log(`Paul possède la combinaison suivante : ${Paul}`);


