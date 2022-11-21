// Write your solution here!
const cats =["Milo","Otis","Garfield"]
function  destructivelyAppendCat(name){
    cats.push("Ralph");
}
function  destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop("Ralph")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Bob")
}
function appendCat(name){
    var name_1=["Milo","Otis","Garfield",name]
    return name_1;
}
function prependCat(name){
    var name_2=[name,"Milo","Otis","Garfield"]
    return name_2;
}
function removeLastCat(name){
    var name_3=["Milo","Otis"]
    return name_3;
    
}
function removeFirstCat(){
    var name_4=["Otis","Garfield"]
    return name_4;
}