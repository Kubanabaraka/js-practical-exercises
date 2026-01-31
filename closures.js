// function introduceYou(name, country) {
//   return `Hi I am ${name} and I am representing ${country}`;
// }

// console.log(introduceYou("Jabo", "Rwanda")); // Hi I am Jabo and I am respresenting Rwanda
// console.log(introduceYou("Arnold", "Rwanda")); // Hi I am Arnold and I am respresenting Rwanda
// console.log(introduceYou("Landry", "Rwanda")); // Hi I am Landry and I am respresenting Rwanda
// console.log(introduceYou("John", "Rwanda")); // Hi I am John and I am respresenting Rwanda
// console.log(introduceYou("Abdul", "UAE")); // Hi I am Abdul and I am respresenting UAE
// console.log(introduceYou("Jane", "USA")); // Hi I am Jane and I am respresenting USA
// console.log(introduceYou("Doe", "USA"));

function createIntroducer(location) {
  return function (name) {
    return `Hi I am ${name} and I am representing ${location}`;
  };
}
let rwandaIntroducer = createIntroducer("Nyarutarama");
let usaIntroducer = createIntroducer("New York");

console.log(usaIntroducer("Jane"));
console.log(usaIntroducer("Doe"));
console.log(usaIntroducer("Smith"));
console.log(usaIntroducer("Emily"));
console.log(usaIntroducer("Michael"));

console.log(rwandaIntroducer("Jabo"));
console.log(rwandaIntroducer("Jabo"));
console.log(rwandaIntroducer("Jabo"));
console.log(rwandaIntroducer("Jabo"));
console.log(rwandaIntroducer("Jabo"));
console.log(rwandaIntroducer("Jabo"));
