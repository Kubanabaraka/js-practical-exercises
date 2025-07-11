function countZeroes(n){
   if(n<=0){
       return `Invalid Input`
   }
   else{
       let count = 0;
       for(let i=0;i<n;i++){
           let numSt = i.toString()
           for(let cha of numSt){
               if(cha === "0"){
                   count++ }
           }
       }
        return `We have found ${count} zeroes `
       }
    
}
console.log(countZeroes(100))