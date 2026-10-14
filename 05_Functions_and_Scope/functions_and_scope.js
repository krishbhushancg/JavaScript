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


//q11
// a) Difference between local scope and global scope
// - Local scope: A variable declared inside a function can be accessed only inside that function.
// - Global scope: A variable declared outside a function can be accessed inside and outside functions.

//b.)
let course = "JavaScript";

function displayAge() {
    let age = 20;
    console.log("Age:", age);
}

function displayCourse() {
    console.log("Course:", course);
}

displayAge();
displayCourse();

console.log(age);

//q12
function analyzeStudent(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;

    return `${name} scored total ${total} with average ${average}`;
}

console.log(analyzeStudent("Rahul", 80, 75, 90));
console.log(analyzeStudent("Priya", 60, 70, 85));

//q13
//a.)
// a) What is a nested function?
// A nested function is a function defined inside another function. The inner function can be called from within the outer function.

//b.)
function studentReport(name, m1, m2, m3) {
    function total() {
        return m1 + m2 + m3;
    }

    return `${name} total marks: ${total()}`;
}

console.log(studentReport("Rahul", 80, 75, 90));


//q14
function generateReport(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let result = average >= 40 ? "Pass" : "Fail";

    return `Student Name: ${name}
Total Marks: ${total}
Average: ${average.toFixed(2)}
Result: ${result}`;
}

console.log(generateReport("Rahul", 80, 75, 90));
console.log(generateReport("Priya", 30, 45, 35));


//q15
function sumOfThree(a, b, c) {
    return a + b + c;
}

function averageOfTwo(x, y) {
    return (x + y) / 2;
}

function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function fullName(first, last) {
    return first + " " + last;
}

console.log(sumOfThree(10, 20, 30));
console.log(averageOfTwo(10, 20));
console.log(maxOfTwo(15, 25));
console.log(fullName("Rahul", "Sharma"));


//q16
const calculateGrade = function(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 40) {
        return "D";
    } else {
        return "F";
    }
};

console.log(calculateGrade(95));
console.log(calculateGrade(82));
console.log(calculateGrade(67));
console.log(calculateGrade(45));
console.log(calculateGrade(32));


//q17
function calculateFinalPrice(price, discountPercent) {
    let finalPrice = price - (price * discountPercent / 100);
    return finalPrice;
}

console.log(calculateFinalPrice(2500, 15));
console.log(calculateFinalPrice(1200, 10));

//q18
const celsiusToFahrenheit = function(c) {
    return (c * 9 / 5) + 32;
};

const fahrenheitToCelsius = function(f) {
    return (f - 32) * 5 / 9;
};

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(98.6));


//q19
// a) Can a function expression be called before it is defined?
// No, not when using a const or let variable to store the function. The variable must be initialized before it is called.

sayHello();

const sayHello = function() {
    console.log("Hello");
};

//b.)
function calculateSquareAndDouble(num) {
    function square() {
        return num * num;
    }

    return square() * 2;
}

console.log(calculateSquareAndDouble(5));

//q20
function processStudent(name, m1, m2, m3) {
    function calculateTotal() {
        return m1 + m2 + m3;
    }

    let total = calculateTotal();
    let average = total / 3;
    let result = average >= 40 ? "Pass" : "Fail";

    return `Student: ${name}
Total: ${total}
Average: ${average.toFixed(2)}
Result: ${result}`;
}

function compareAverages(avg1, avg2) {
    if (avg1 > avg2) {
        return "First average is higher";
    } else if (avg2 > avg1) {
        return "Second average is higher";
    } else {
        return "Both averages are equal";
    }
}

console.log(processStudent("Rahul", 80, 75, 90));
console.log(processStudent("Priya", 60, 70, 85));
console.log(processStudent("Amit", 30, 35, 40));

console.log(compareAverages(81.67, 71.67));
console.log(compareAverages(70, 70));