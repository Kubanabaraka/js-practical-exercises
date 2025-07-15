
function stringAdd(str1,str2){
    return `${string(str1)} ${string(str2)}`;
}
function string(value) {    
    if (typeof value === 'number') {
        return value.toString();
    }
    return value;
}
console.log(stringAdd("Hello", "World"));
console.log(stringAdd("Hello", 7748)) 