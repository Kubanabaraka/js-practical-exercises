function oddSquares (arr){
return arr.filter((num) => num %2 !== 0).map(num => num*num)
}
console.log(oddSquares([1,2,3,4,5,6]))