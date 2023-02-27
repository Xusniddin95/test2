// data types
// string, number, undefined, null, boolean, object, array


// let name1 = "Xusniddin";
// const l_name = "Erkinov";

// alert('Dou you want quit?');
// console.log(name1);

// let firstName = "Xusniddin";
// let lastName  = "Erkinov";
// let age = 28;
// let subject = undefined;
// let isMarried = true;
// const birthday = null;

// console.log(typeof birthday)


// concatination
// console.log(firstName + " " + lastName + " dan salom")
// //add since ES6 
// console.log(`${firstName} ${lastName} dan salom`)

// // edit properties of String
// console.log(firstName.toUpperCase())
// // split() -> string to array
// console.log(firstName.split(''))
// console.log(length.firstName)
// console.log(firstName.split(''))

// // ARRAY
// const cars = ["Audi", "BMW", "Tesla"];
// console.log(cars);
// // add to the end
// cars.push("Toyota");

// // add to the head
// cars.unshift("GM");

// // delete one element at the end
// cars.pop();
// console.log(cars);

// // object ->key:value
// const person = {
//     name:"Xusniddin",
//     age:28,
//     isStudent:true,
//     address:{
//         street:"Tashkent",
//         houseNumber:15
//     }
// }
// console.log(person)
// // eskicha usul
// console.log(person.name, person.address.street)
// // add to ES6 -> object elementlarini ajratib olish
// const {name, age, isStudent, address: {street, houseNumber}} = person;
// console.log(name, age, street)

// console.log(`${name} ${age} yoshda` )

// // object to String
// console.log(JSON.stringify(person))

// // MURAKKAB ARRAY
// const student = [
//     {
//         fname:"Xusniddin Erkinov",
//         age:28,
//         graduated:false
//     },
//     {
//         fname:"Abdujalil Ikramov",
//         age:29,
//         graduated:true
//     },
//     {
//         fname:"Sherali Isakov",
//         age:31,
//         graduated:true
//     }
// ];

// // console.log(student)

// // console.log(student[0])
// // console.log(student.length)

// for (let i = 0; i < student.length; i++){
//     console.log(student[i].fname)
// }

// // ARRAY FUNCTIONS
// const graduated = student.filter(function(student){
//     return student.graduated === false;
// }).map(function(s){
//     return s.fname;
// })

// console.log(graduated)

// // ES6 da argument bitta bulsa qavs ham shart emas 
// const graduated1 = student.filter(student => {
//     return student.graduated === true;
// }).map(s => {
//     return s.fname;
// })

// console.log(graduated1)

// // statement if .. else
// const a = 24;
// const b = 22;

// if(a >= b){
//     console.log("true")
// }else{
//     console.log("false")
// }

// const score = 78;

// // if(score >=90){
// //     console.log("You got A");
// // }else if(score < 90 && score >= 80){
// //     console.log("You got B");
// // }else if(score < 80 && score >= 70){
// //     console.log("You got C");
// // }else if(score < 70 && score >= 60){
// //     console.log("You got D");
// // }else{
// //     console.log("You failed");
// // }

// // yangicha usulda 
// const result = score > 70 ? "A" : "B";
// console.log(result)


// FUNKSIYA
// function addNum(){
//     console.log("Function works");
// }
// addNum();

// function addNum(num1, num2){
//     console.log(`${num1} + ${num2} = ${num1 +num2}`);
// }
// addNum(3, 15);

// // ES6 da

// const multiplyNum = (n1, n2) => {
//     console.log(`${n1} + ${n2} = ${n1 +n2}`);
// }
// multiplyNum(12, 23);






// // WebBrainAcademy //

// // String
// str = "Xusniddin Erkinov \"Java Script darslari\" ";
// str1 = 'Xusniddin Erkinov "Java Script darslari" ';

// console.log(str);
// console.log(str1);

const fio = "Xusniddin Erkinov";
console.log(`${fio} "JavaScript" darslari`);
console.log(fio.length);
console.log(fio.split());
console.log(fio.split(''));
console.log(fio[10]);
console.log(fio.indexOf("E"));
console.log(fio.slice(10,17));