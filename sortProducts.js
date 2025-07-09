const products = [
    {id: 1, name: 'Bible', price: 100000},
    {id: 3, name: 'Benz', price: 20000000},
    {id: 4, name: 'Book', price: 14000},
    {id: 5, name: 'Big House', price: 60000000000}
]
const sortProducts = (products)=>{
    return products.sort((a,b)=>{
        if(a.price < b.price) return -1;
        if(a.price > b.price) return 1;
    })
}
console.log(sortProducts(products));