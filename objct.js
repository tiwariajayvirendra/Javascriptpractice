// This is an example of Object (a collection of DataTypes like ,
// [<1 String = "under these double inverted comma" ,
//   2 Number = 123456,
//   3 Boolean = true and false,
//   4 Undefined  let a;,
//   5 Null let a= ;,
//   6 BigInt 4.565,
//   7 Symbol * 
// > )
////////////////////////////////////////////////////////////////////////////////
// const profile = {
//     username : "Ajay Tiwari",
//     folowers : 1999999,
//     following: 200,
//     isfollow :true,
//     posts    : 46,
//     info     : "male ",
//     age      : 35,
// };
// console.log(typeof profile["age"]);
////////////////////////////////////////////////////////////////////////////////
// Arthematic operators [ + , _  , * , / ],
// let a = 9;
// let b = 2;
 
// // console.log("a ** b =" , a ** b);
// // console.log("a % b  =", a % b);
// // console.log("a / b =", a / b);

// // Unarry Operatorys like Incriment And Decriment 

// console.log(a--

// let a = 5;
// let b = "5"; 
// Arthemetic operator
// a += 4 
// a -= 5;
// a *= 5; 
// a /= 6;
// a %= 7;
// a **= 7;// Exponentation means the powers of value 

// console.log("a =", a);// ans is  a + 4 +100 +104
// console.log("a =" ,a);// ans is 100 - 4 = 95
// console.log("a = ", a); // ans is 100 * 5 = 500
// console.log("a =" , a); //modulo


//  console.log("a = ", a); // 

// Comparison Operator 


// console.log("a == b", a == b); // comparing 2 values like a  kya b ki taraha same hai 
// console.log("a===b", a === b); //   strict version absalute equal 
// console.log("a == b", a == b);
// 
// let a = 5;
// let b = 6; 
// console.log("a => b",a >= b);

// Logical Operators

// let a = 4;
// let b = 4;


// let cnd1 = a <= b;//true
// let cnd2 = a === b;// true
// console.log("cnd && cnd2",!(cnd1 <= cnd2));


// Conditinal Statements///////////////////////

// let age = 43;

// if(age >= 18){
//     console.log("You can not vote")
// } else{
//     console.log("You Rock")
// };


// Exe 1///////////////////////////////////////
// let age = 18;

//     if(age >= 18){
//         console.log("You can Vote")
//     };

//     if(age < 18){
//         console.log("You rock")
//     };

// Exe 2/////////////////////////////////////////

// let mode ="dark";
// let color;

//     if(mode === "dark"){
//         color = "black"
//     };

//     if(mode === "light"){
//         color = "white"
//     };

//     console.log(color);

// Exe 3///////////////////////////////////////////

// let mode ="dark";
// let color;

// if(mode === "light"){
//     color="black"
// }else{
//     color ="white"
// };
// console.log(color)


// Exe 4/////////////////////////////////////////////


// let age = 16;

// if(age >= 18){
//     console.log("Hello You Can Vote")
// }else{
//     console.log(" Hello Get Out from Here ")
// };

// Exe 5///////////////////////////////////////////////

// let num = 117;

// if(num%2 === 0){
//     console.log(num,"is Even")
// }else{
//     console.log(num,"is Odd")
// };

// Exe 5////////////////////////////////////////////////

// let mode ="dark";
// let color;

// if (mode ==="dark"){
//     color = "Black"
// }else if(mode === "blue"){
//     color = "navyBlue"
// }else if(mode === "yello"){
//     color = "Dark yello"
// }else{
//     color = "Pink"
// };
// console.log(color);

// if(mode === "dark")
//     console.log(mode);


// Exe 6/// Ternary Operatory/////////////////

// let age = 32;
// //  let result = age >=18 ? "You are adlult": "You are NOt An adult";

//  age >=18 ? console.log("You are adlult"): console.log("You are NOt An adult");

//  console.log(result)


// Exe 7///////////////////////////////////////////////

// Qs1. Get user to input a number using prompt("Enter a Number").Check a number is multiple of 5 or not.

// Ans

// let num = prompt("Enter a Number:");

// if(num% 5 ===0){
//     console.log(num,"Number is Modulo of 5")
// }else{
//     console.log(num,"Number is Not Modulo of 5")
// }



///////////////////////////////////////////////////////////////////////////////////////////////////
 
// Q2.Write a code which can give grade to students According to score.According.
    // 90 to 100, A 
    // 70 to 89, B 
    // 50 to 69, C 
    // 35 to 49, F
// Ans.
// let score = 43;
// let grade;

// console.log("Hello World");
//     if(score >= 90 && score <= 100){
//         grade="A";
//     }else if(score >= 70 && score <= 89){
//         grade="B";
//     }else if(score >= 60 && score<=69){
//         grade="C";
//     }else if(score >= 45 && score <=59){
//         grade="D";
//     }else if(score >=0 && score <= 44) {
//         grade="F";
//     };

// console.log("Hello Your Score is ",score, "And Your Grade is ", grade);

//////////////////////////////////////////////////////////////////////////////

// Loops and streengs

// loop of 1 to 9
// for(let ajay=1; ajay<=9; ajay++){
//     console.log(ajay,"I am not a king but i am best in the world") //execute 9 times
// };
// console.log("No more lines left after printing of 9 lines")/

// Calculate the sum of 5 
 

// for loop

// Exe 1

// let sum = 0;

// for(let i = 1; i <= 90; i++){
//     sum = sum + i;
// };
// console.log("sum =", sum)

// Exe 2
// While loop

// let i = 1;
// let j = 1;

// while(i <= 10,j <= 20){
//     console.log("Hello",i ,"Joker" , j);
//     i++;
//     j++;
// }

// Exe 3

//Do while Loop 

// let i = 0;

// do{
//     console.log("I = ",i);
//     i++;
// }while(i <= 5);

//Exe 4

// For-of-Loop

// let str = "HelloWorld";
// let size = 0

// for(let i of str ){
//     console.log("i =", i)
//     size++
// };
// console.log("String = ", size);

//for-in loop

// Exe5

// let student ={
//     name: "Ajay Tiwari",
//     age : 24,
//     salary : 27.5
// };
// for(let key in student){
//     console.log(key,"=", student[key]);
// };

// Practice Question 

// Print all the even numbers between 1 to 100.


// for(let count=0; count<=100; count++){
//     if(count % 2 !== 0){
//         console.log("Is odd", count)//change ! this to === and it will be even
//     }  //*else{
//     //     console.log("IT is ODD",count)
//     // }*//
// };

// Q2 Create a Gussing game with given Number if number match you won the mathch 


// let gameNum = 5;
// let userName=prompt("You need to enter a correct num. Guss number:");

// while(gameNum != userName) {
//     gameName =prompt("Wrong You need to enter a correct num. Again number:");
// }
// console.log("You Won the match");

// Exe 1
// let gameNum = 5;
// let userName = prompt("You need to enter a correct number. Guess the number:");

// while (gameNum != userName) {
//     userName = prompt("Wrong! You need to enter the correct number. Try again:");
// }

// console.log("You won the match!");


// Q2 Create a Gussing game with given Number if number match you won the mathch 
// let gameName = 20;
// let userName = prompt("1 to 50 Guess the correct number:");

// while (gameName != userName) {
//     userName =prompt("This number is wrong Please enter another valid number:");

// }
// console.log("Your answer is write GOOD JOB !");


// Q2.Write a code which can give grade to students According to score.According.
    // 90 to 100, A 
    // 70 to 89, B 
    // 50 to 69, C 
    // 35 to 49, F
// Ans.

// let score =87;
// let grade;

// if(score >= 90 && score <= 100){
//     grade = "A";
// }else if(score >= 76  && score <= 89){
//     grade = "B";
// }else if(score >= 56 && score <= 75){
//     grade ="C";
// }else if(score >= 35 && score <= 55){
//     grade ="D";
// }else if(score >= 0 && score <= 34){
//     grade = "F"
// };
// console.log("Your Score is",score, "Your grade is",grade);

/////////////////////////////////////////////////////////////

//  String Methods

// let str="HelloWorld";
// console.log(str[7]); // Output is r


/////////////////////////////////////////////
// let score = 43;
// let grade;

// console.log("Hello World");
//     if(score >= 90 && score <= 100){
//         grade="A";
//     }else if(score >= 70 && score <= 89){
//         grade="B";
//     }else if(score >= 60 && score<=69){
//         grade="C";
//     }else if(score >= 45 && score <=59){
//         grade="D";
//     }else if(score >=0 && score <= 44) {
//         grade="F";
//     };

// console.log("Hello Your Score is ",score, "And Your Grade is ", grade);


// let object1 = {
//     name: "Ajay",
//     surname: "Tiwari",
//     address: "Lamatiya",
//     pincode: 273413,
//     age: 24
// };

// let object2 = {
//     name: "Vijay",
//     surname: "Tripathi",
//     address: "America",
//     pincode: 273443,
//     age: 25
// };

// console.table([object1, object2]);



// Template Literals


// eg 1


// let SuperString = `My name is aj styles  I am best in the world in coding` ;
// console.log(SuperString);

// let obj={
//     nam: "ajay",
//     age: 56
// };

// let output = `My name is ${obj.nam} and my age is ${obj.age} `;
// console.log(output);

// console.log("my name is ",obj.nam,"and my age is ", obj.age);


// let output = `My and my age is ${1+4+21} `;
// console.log(output);


// console.log("Ajay\tTiwari");
// console.log("Ajay\nTiwari") //expect(12)   but returns(11)
 
// let name= "ajay\ntiwari";
// console.log(name.length);  // length is 11 due to \n counts only 1 characters

// String Methods - toUpperCase toLowerCase toTrim 
let work="my name is ajay tiwari and i am best in the world";
newwork= work.toUpperCase();
console.log(work);
console.log(newwork);

work = work.toLowerCase() // it will work if same name if you taken for its object name 

console.log(work);








