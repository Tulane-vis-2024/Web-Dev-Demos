// This example is largely pulled from a Demo from Dr. Alex Lex: https://www.dataviscourse.net/tutorials/lectures/lecture-javascript/.

//------------- Variable Types ------- //
//global variables - no matter where declared (even in a function!)
animal = "Dog"

//Hoisting Demo
// console.log("This variable is hoisted, but not assigned: ",pet_name)
// console.log("This variable is also hoisted, but results in error: ", age)


//function-scoped variables* - not recommended
var pet_name = "Rodger"

//block-scoped variables
let age = 7

//constant, block-scoped
const breed = "Golden Retriever"

//Throws a type error
// breed = "Labrador"

// // Careful! Complex data types are still mutable
// const friends = ["Ruckus","Wesley"]
// console.log(friends)

// friends[0] = "Maggie" //Does not throw an error!
// console.log(friends)









// -------- Scoping -----//

// Test the scope of different variables
// function scope_test(){
//     let test_val = 4

//     if (test_val > 3){
//         var v1 = "val from var"
//         let v2 = "val from let"
//         v3 = "Val from global"
//     }
//     console.log(v1)
//     // console.log(v2)
// }

// scope_test()

// console.log(v3)

// console.log(some_global_var)
// console.log(some_var)
// console.log(some_let)


// print_from_other_file()









//----------- Functions ---------//
// function someFunction(v) {
//     if (v < 10) {
//         return v;
//     } else {
//         return v*v;
//     }
// }

// console.log(someFunction("50"));
// console.log(someFunction("what?"));
// console.log(someFunction(30, "huh?"));
// console.log(someFunction()); 



// // Anonymous Functions
// let round = function(val){ return parseInt(100*val)/100};











// ------------ Arrays ----------------//

// let numArray = [0,1,2]
// let emptyArray = []


// console.log(numArray[0])


// console.log(numArray.length) //output -> length of array: 3
// numArray.push(3) //numArray ->[0,1,2,3]
// console.log(numArray)
// console.log(numArray.pop()) //output->last element: 3, numArray ->[0,1,2]
// console.log(numArray)
// console.log(numArray.indexOf(1)) //output->index of 1: 1


// multiarray = [[0,1],[2,3]] 
// console.log(multiarray[0][1])











// ------------ Objects ----------------//

// let obj = {
//     key1: 3,
//     "key2": 5
// }

// console.log("Value of key1: ", obj.key1)
// console.log("Value of key2: ", obj["key2"])

// obj.new_key = "new attribute"s




// let pet = {
//     animal:"Dog",
//     name:"Rodger",
//     breed:"Golden Retriever",
//     age:7,
//     friends: ["Maggie","Wesley"],
//     birthday: function(){
//         this.age = this.age+1;
//     }
// }

// console.log("Birthday variable: ", pet.birthday)

// pet.birthday()

// console.log("New Age: ", pet.age)




// Let's build something that looks like OOP
// function createObject(content) {
//     let result = {
//         get: function() {
//             return content;
//         },
//         set: function(newValue) {
//             content = newValue;
//         },
//         twice: function() {
//             return content * 2;
//         }
//     };
//     return result;
// }

// let f = createObject("something");
// console.log("Get: " + f.get());
// console.log("Twice: " + f.twice());
// f.set(20);
// console.log("Get: " + f.get());
// console.log("Twice: " + f.twice());

// Can also specify classes and use "new" to instantiate
// class Pet{

//     contructor(t, n, a){
//         this.type = t;
//         this.name = n;
//         this.age = a;
//     }

//     birthday(){
//         this.age++;
//     }
// }

// let pet1 = new Pet("Dog","Silvia","12")
// let pet2 = new Pet("Cat","Neda","7")










//----------------Control Structures ----------//

// // The familiar if, but notice the triple = 
// if (1 === parseInt("1")) {
//     console.log("First if");
//     // note that you can use parseInt or the
//     // unary + operator, the latter is usually better
// } else if (2 === +"3") {
//     console.log("Else if");
// } else {
//     console.log("else");
// }

// // notice the type coercion that happens with just regular == signs
// if (1 == "1") {
//     console.log("We'll just parse that for you, OK?");
// }

// // use === to not do that implicitly
// if (1 === "1") {
//     // not reaching this
// } else {
//     console.log("String and Int are not the same! This is safer!");
// }

// // The ternary if operator
// // CONDITION ? WHAT_HAPPENS_IF_CONDITION_TRUE : WHAT_HAPPENS_IF_CONDITION_FALSE
// true === true ? console.log("Ternary if clause true") : console.log("Ternary if clause false");

// // Switch statements
// let i = "some case";
// switch (i) {
//     case "string literals ok":
//         console.log("Yes");
//         break;
//     case "some case":
//         console.log("switch matches!");
//         break;
//     default:
//         console.log("Default");








//---------------- Looping ------------------- //

// //for loops
// let output = "";
// for (let i = 0; i < 10; ++i) {
//     output += i + ", ";
// }
// console.log("For loop: " + output);

// // while loops;
// let i = 3;
// output = "";
// while (i < 100) {
//     output += `${i}, `;
//     i = i * 2;
// }
// console.log(`While loop: ${output}`);

// // Do-while loops:
// i = 3;
// output = "";
// do {
//     output += `${i}, `;
//     i = i * 2;
// } while (i < 100);
// console.log(`Do while loop: ${output}`);




// let years = [1954, 1949, 1981, 1982];
// // Looping over an array with the built-in forEach function
// console.log("Foreach function")
// years.forEach(function (d) {
//     console.log(d)
// });

// // Looping over an array with the new for of loop
// console.log("For of loop (newish)");
// for (let year of years) {
//     console.log(year)
// }

// // Side-note: don't use for-in - it loops through object enumerables,
// // also, order isn't guaranteed!
// console.log("For in loop: not what you'd expect!");
// for (let year in years) {
//     // you probably thought that you'll just get the year here, right?
//     console.log(year);
//     // what you really get are the object keys
//     console.log(years[year]);
// }

// // // for-in for an object
// let object1 = {a: 1, b: 2, c: 3};
// for (let property in object1) {
//     console.log(property, object1[property]);
// }







//-------------- This --------------//



// function otherObject(value) {
//     return {
//         x: value,
//         get: function () {
//             return this.x;
//         },
//         set: function (newValue) {
//             this.x = newValue;
//         }
//     };
// }

// let other = otherObject(3);
// console.log("X: " + other.x);
// console.log("Getter: " + other.get());
// other.set(5);
// console.log("Getter after set: " + other.get());
// console.log("X: " + other.x);




// function yetAnotherObject() {
//     return {
//         x: 3,
//         get: function () {
//             console.log("This:");
//             console.log(this);
//             return this.x
//         }
//     };
// }

// let obj = yetAnotherObject();
// console.log("As expected: " + obj.get()); // fine
// // re-assigning the getter only to another object
// let t = obj.get;
// console.log("Problem: " + t()); // *NOT* fine, this is bound to the context of the calling object, which is the global "this" Window


// function myFinalObject() {
//     return {
//         x: 7
//     };
// }

// let my_obj = myFinalObject();
// my_obj.get = t
// console.log("This accesses my x: ", my_obj.get());