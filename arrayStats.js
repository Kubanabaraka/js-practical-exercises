function arrayStats(arr){
    const sum = arr.reduce((acc,num)=> acc+num,0);
    const average = parseFloat(sum/arr.length.toFixed(2))
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    
    const obj = {
        "sum": sum,
        "Average": average,
        "Min": min,
        "Max": max
    }
    return obj
}
console.log(arrayStats([1, 2, 3, 4, 5]));