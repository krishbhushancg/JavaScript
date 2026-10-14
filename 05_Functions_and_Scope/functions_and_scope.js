const prompt = require('prompt-sync')();


// q1 What is a function in JavaScript? List any four advantages of using functions in a program.

// A function is a reusable block of code designed to perform a specific task.

// Instead of writing the same logic repeatedly, you write it once inside a function and call it whenever required.

// Functions help in:

// Reusability
// Cleaner code
// Reduced repetition
// Better structure


//q2 
function greetStudent(name){
    return(`Hello ${name} welcome to CodingGita!`)
}

console.log(greetStudent("krish"))
console.log(greetStudent("keshav"))


// q3 
// Explain what is meant by hoisting in the context of function declarations.
// Write a code example that shows a function declaration being called before it is defined, and explain why it works.

// Hoisting is a behavior in JavaScript where the interpreter appears to move function declarations to the top of their containing scope before executing the code. This allows you to call a function before it is written in your source file.
// During the compilation phase, JavaScript scans the code and stores function declarations in memory. Because the function is already loaded into memory before the code runs line-by-line, it is available anywhere within that scope.

// The function is called here, before it is written in the code
greet("Alice"); 

// The function declaration is defined lower down
function greet(name) {
  console.log(`Hello, ${name}!`);
}


//q4
const calculateAverage = function Average(a, b, c) {
    return (a + b + c) / 3;
}
console.log(calculateAverage(80,90,70))


//q5
function multiply(x, y) {
    return x * y;
}
console.log(multiply(12, 5));

// here parameter is x and y 
// arguments are 12, 5


// Parameters
// Variables defined inside the function definition.

// whereas

// Arguments
// Actual values passed while calling the function.


//q6

function isEven(n){
    return(n%2==0)
}

n=Number(prompt("enter number: "))

console.log(isEven(n))


//q7
function findPercentage(obtainedMarks,totalMarks){
    return(`${(obtainedMarks/totalMarks)*100} %`)
} 

n=Number(prompt("enter obtainedMarks: "))
m=Number(prompt("enter totalMarks: "))

console.log(findPercentage(n,m))


//q8
function nothing(){
    return
}

console.log(nothing())

//it returns undefined


//q9
function calculateSimpleInterest(principal,rate,time){
    return(`SI: ${(principal*rate*time)/100}`)
}

p=Number(prompt("enter principal: "))
r=Number(prompt("enter rate : "))
t=Number(prompt("enter time: "))

console.log(calculateSimpleInterest(p,r,t))


//q10

//a.)
// Function declarations are hoisted (can be called before definition).

// whereas

// function expressions
// Not hoisted
// Must be defined before calling
// Commonly used when passing functions as values


//b.)

function report(name,marks){
    return(`student ${name} has scored ${marks} marks`)
}

console.log(report("krish",99))
console.log(report("harsh",98))
