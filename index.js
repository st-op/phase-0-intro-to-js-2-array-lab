const cats = ["Milo", "Otis", "Garfield"];
//is assigned an initial value of ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
//appends a cat to the end of the cats array

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
//prepends a cat to the beginning of the cats array

function destructivelyRemoveLastCat() {
    cats.pop()
}
//removes the last cat from the cats array

function destructivelyRemoveFirstCat() {
    cats.shift()
}
//removes the first cat from the cats array

let name = "kitty"

function appendCat(name) {
    const moreCats = [...cats, "Broom"];
    return moreCats;
}
//appends a cat to the cats array and returns a new array, leaving the cats array unchanged

function prependCat(name) {
    const evenMoreCats = ["Arnold", ...cats];
    return evenMoreCats;
}
//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

function removeLastCat() {
    const byeLastCat = [
    ...cats.slice(0, cats.length - 1)
    ];
    return byeLastCat;
}
//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

function removeFirstCat() {
    const byeFirstCat = [
        ...cats.slice(1)
        ];
        return byeFirstCat;
}
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged