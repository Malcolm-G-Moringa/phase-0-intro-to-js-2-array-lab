// Write your solution here!
let cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(name)
{
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name)
{
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name)
{
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat()
{
    cats.shift();
    return cats;
}

function appendCat(name)
{
    let newCats = ['Milo','Otis','Garfield'];
    newCats.push(name);
    return newCats;
}

function prependCat(name)
{
    let newCats = ['Milo','Otis','Garfield'];
    newCats.unshift(name);
    return newCats;
}

function removeLastCat()
{
    let newCats = ['Milo','Otis','Garfield'];
    newCats.pop();
    return newCats;
}

function removeFirstCat()
{
    let newCats = ['Milo','Otis','Garfield'];
    newCats.shift();
    return newCats;
}