function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

let tab = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];


let card = getMultipleRandom(tab, tab.length)

let [Pierre, Paul, Jack] = [...card];

console.log(Pierre);
console.log(Paul);
console.log(Jack);