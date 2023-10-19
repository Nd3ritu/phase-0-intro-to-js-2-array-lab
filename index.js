// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveFirstCat(name) {
  cats.shift();
}

function destructivelyRemoveLastCat(name) {
  cats.pop();
}

function removeFirstCat() {
  return cats.slice(1);
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat(name) {
  return cats.slice(0, -1);
}
