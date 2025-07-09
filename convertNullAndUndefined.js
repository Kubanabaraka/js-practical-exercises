const object = {
    name: "Alice",
    age: null,
    email: undefined,
    address: {
        street: "123 Main St",
        city: "Springfield",
    
    },
    isActive: true,
    zipCode: undefined,
    phone: null,
};

function convertNullAndUndefined(obj){
    for(const key in object){
        if(object[key]=== null){
            object[key] = ""}
            else if(object[key]=== undefined){
            object[key] = 0;
            }
    }
return object
}
console.log(convertNullAndUndefined(object));