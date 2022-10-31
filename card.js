
let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function spliceTab(array) {
    let test = array.splice(0, 4);
    return test
}

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}


let randomTab = getMultipleRandom(tab, tab.length);
let Pierre = spliceTab(randomTab);
let Jack = spliceTab(randomTab);
let Paul = spliceTab(randomTab)

console.log(Pierre);
console.log(Jack);
console.log(Paul);


