//Q1
//1.

let classFund1=15000;
let classFund2=12500;

total=(classFund1+classFund2);

console.log("total collection:",total)


//2.
let morningPages=18;
let eveningPages=25;

total=(morningPages+eveningPages);

console.log("total pages read:",total)


//3.
let itemsMonday=125;
let itemsTuesday=178;

total=(itemsMonday+itemsTuesday);

console.log("total items sold:",total)



//Q2
//1.

let totalSeats=80;
let seatsOccupied=53;

let seatsRemaining=(totalSeats-seatsOccupied);

console.log("seats remaining are",seatsRemaining);


//2.
let totalMarksgot=500;
let marksLost=35;

let finalMarks=(totalMarksgot-marksLost);

console.log("final marks are",finalMarks);


//3.
let totalBoxes=80;
let boxesSent=53;

let remainingBoxes=(totalBoxes-boxesSent);

console.log("boxes remaining are",remainingBoxes);


//Q3
//1.
let notebookCost=45;
let numberOfbooks=8;

let totalAmount=(notebookCost*numberOfbooks);

console.log("total cost for buying books:",totalAmount);


//2.
let Production1Hour=120;
let numberOfhours=6;

let totalCost=(notebookCost*numberOfbooks);

console.log("total cost for buying books:",totalCost);

//3.
let rows=7;
let plantsRow=15;
let totalPlants=(rows*plantsRow);

console.log("total number of plants:",totalPlants);



//Q4

//1.
let totalPencils=144;
let students=12;

let pencilPerstudent=(totalPencils/students);

console.log("one student will get",pencilPerstudent,"pencil");

//2.
let distanceCovered=360;
let timeTaken=6;

let speed=(distanceCovered/timeTaken);

console.log("time taken to cover this distance:",speed);

//3.
let amount=72000;
let departments=9;

let amountperdepartment=(amount/departments);

console.log("amount received by one department:",amountperdepartment);




//Q5
//1.
let numberOfstudents=53;
let numberOfgroups=5;

let remainingStudents=(numberOfstudents%numberOfgroups);

console.log("students remaining:",remainingStudents);

//2.
let numberOfcandies=128;
let candyBox=5;

let candiesUnpacked=(numberOfcandies%candyBox);

console.log("students remaining:",remainingStudents);

//3.
let numberByuser=4;
if ( numberByuser%2==0){
   console.log(numberByuser,"is divisible by 2")
};

//4.
let factoryProduces=237;
let boxes=6;
let toysLeft=factoryProduces%boxes;

console.log(`toys left: ${toysLeft}`);

//5.
let busCapacity=40;
let peopleWaiting=185;
let peopleLeft=busCapacity%peopleWaiting;

console.log(`number of people left after filling the bus: ${peopleLeft}`);




//Q6
//1.
let sideLength=6;
let volume=(sideLength**3)

console.log("volume:",volume);

//2.
let bacteriaPerhour=2;
let time=4;

let numberOfbacteria=(1*bacteriaPerhour**time);

console.log("total number of bacteria:",numberOfbacteria);

//3.
let cell1Side=9;
let totalCells=(cell1Side**2);
console.log("Total cells:",totalCells);


//4.
let a=5;
let b=4;
let c=a**b;

console.log(`5 raised to poer 4: ${c}`);

//5.
let pixelQuantity=1024;
let totalNumber=pixelQuantity**2;
console.log(`total number of pixels: ${totalNumber}`);


// PART-B ASSIGNMENT
//Q1.
//1.
let age=18;
console.log(age);

//2.
let penPrice=180;
console.log(penPrice);

//3.
let daysInWeek=7;
console.log(daysInWeek);

//4.
let city= "patna";
console.log(city);

//5.
let piValue=18;
console.log(piValue);


//Q2.
//1.
let studentMarks=200;
let moreMarks=35;
studentMarks+=moreMarks;
console.log(`update marks: ${studentMarks}`);

//2.
let savingsAmount=5000;
let depositAmount=1200;
savingsAmount+=depositAmount
console.log(`the updated balance: ${savingsAmount}`);

//3.
let phoneBattery=45;
let additionalCharge=30;
phoneBattery+=30;
console.log(`updated battery percentage: ${phoneBattery}`);

//4.
let initialPoints=1250;
let additionalPoints=375;
initialPoints+=additionalPoints;
console.log(`final points: ${initialPoints}`);

//5.
let booksQuantity=840;
let newBooks=160;
booksQuantity+=newBooks;
console.log(`total books: ${booksQuantity}`);



//Q3
//1.
let totalQuantity=1000;
let waterUsed=375;
totalQuantity-=waterUsed;
console.log(`water left: ${totalQuantity}`);

//2.
let totalMoney=500;
let moneySpend=180;
totalMoney-=moneySpend;
console.log(`remaining  money: ${totalMoney}`);

//3.
let mobileBattery=90;
let batteryUsed=45;
mobileBattery-=30;
console.log(`remaining battery percentage: ${mobileBattery}`);

//4.
let totalWarehouseBoxes=2400;
let boxesSentout=950;
totalWarehouseBoxes-=boxesSentout;
console.log(`remaining boxes: ${totalWarehouseBoxes}`);

//5.
let totalPoints=2000;
let lostPoints=625;
totalPoints-=lostPoints;
console.log(`remaining points: ${totalPoints}`);



//Q4
//1.
let populationTown=5000;
let increase=3;
populationTown*=increase;
console.log(`population count: ${populationTown}`);

//2.
let productionPerday=120;
let increaseProduction=4;
productionPerday*=increaseProduction;
console.log(`new production: ${productionPerday}`);

//3.
let savingAmount=2000;
let rate=2;
savingsAmount*=rate;
console.log(`new savings amount: ${savingAmount}`);

//4.
let totalGardenPlants=50;
let increasePlants=5;
totalGardenPlants*=increasePlants;
console.log(`total plants now: ${totalGardenPlants}`);

//5.
let gameScore=50;
let multiplier=3;
gameScore*=multiplier;
console.log(`total score now: ${gameScore}`);


//Q5
//1.
let totalLength=1200;
let parts=4;
totalLength/=parts;
console.log(`each will get: ${totalLength}`);

//2.
let companyBudget=80000;
let projects=8;
companyBudget/=projects;
console.log(`each project will get: ${companyBudget}`);

//3.
let sugarJar=960;
let packets=6;
sugarJar/=packets;
console.log(`each will contain: ${sugarJar} gram`);

//4.
let distance=450;
let trips=5;
distance/=trips;
console.log(`distance per trip: ${distance}`);

//5.
let totalMarks=2500;
let numOfStudents=10;
totalMarks/=numOfStudents;
console.log(`marks per student: ${totalMarks}`);


//Q6
//1.
let totalCandies=137;
let box=10;
totalCandies%=box;
console.log(`number of chocolates left: ${totalCandies}`);

//2.
let totalStudents=250;
let teams=7;
totalStudents%=teams;
console.log(`number of students left: ${totalStudents}`);

//3.
let requiredDays=1000;
let weekDays=7;
requiredDays%=weekDays;
console.log(`number of days left: ${requiredDays}`);

//4.
let requiredChairs=89;
let numberOfrows=5;
requiredChairs%=numberOfrows;
console.log(`number of chairs left: ${requiredChairs}`);

//5.
let loantime=365;
let year=12;
loantime%=year;
console.log(`number of months left: ${loantime}`);

//Q6
//1.
let side=10;
let area=side**2;
console.log(`area: ${area}`);

//2.
let edge=4;
let volumeOfCube=(edge**3);
console.log(`volume:${volumeOfCube}`);

//3.
let imageSizeFactor=3;
let areaGrowth=imageSizeFactor**2;
console.log(`total area growth: ${areaGrowth}`);


//PART-C
// comparision & relation operators
//Loose equality ==
//q1
let storedPassword = 1234;
let userPassword = "1234";

console.log(storedPassword == userPassword);
//q2
let userAnswer = 0;
let defaultAnswer = false;

console.log(userAnswer == defaultAnswer);
//q3
let userInput = "";
let submitted = false;

console.log(userInput == submitted);
//q4
let backend = null;
let frontend = undefined;

console.log(backend == frontend);
//q5
let score1 = 500;
let score2 = "500";

console.log(score1 == score2);

// loose equality =!
//q1
let code1 = "SAVE10";
let code2 = "SAVE20";

console.log(code1 != code2);
//q2
let userRole = "admin";
let defaultRole = "guest";

console.log(userRole != defaultRole);
//q3
let correctAnswer = 42;
let Answer = "40";

console.log(correctAnswer != Answer);
//q4
let email = "";
let emptyFlag = false;

console.log(email != emptyFlag);
//q5
let userId = null;
let validId = 101;

console.log(userId != validId);

// strict Equality ===
//q1
let passStored = 1234;
let passEntered = "1234"; 
console.log(passStored === passEntered);
//q2
let acctNumA = 1234567890;  
let acctNumB = 1234567890; 
console.log(acctNumA === acctNumB);
//q3
let flagStatus = true;
let stateValue = 1;

console.log(flagStatus === stateValue);
//q4
let dbEntry = null; 
let cacheEntry = undefined; 
console.log(dbEntry === cacheEntry);

//q5
let marksA = 85; 
let marksB = 85; 
console.log(marksA === marksB);

// strict inequality !==
//q1
let textId = "101";
let numericId = 101;

console.log(textId !== numericId);
//q2
let boolStatus = true;
let numberStatus = 1;

console.log(boolStatus !== numberStatus);
//q3
let mainPass = "abc123";
let verifyPass = "abc124";

console.log(mainPass !== verifyPass);
//q4
let serverInfo = null;
let localInfo = undefined;

console.log(serverInfo !== localInfo);
//q5
let playerOne = 10;
let playerTwo = 20;

console.log(playerOne !== playerTwo);

// Greater Than >
//q1
let personAge = 20;
let legalAge = 18; 
console.log(personAge >= legalAge);
//q2
let orderAmount = 650; 
let shippingLimit = 500; 
console.log(orderAmount >= shippingLimit);
//q3
let Score = 1200; 
let unlockScore = 1000; 
console.log(Score >= unlockScore);
//q4
let salaryAmount = 40000; 
let incomeRequirement = 30000; 
console.log(salaryAmount >= incomeRequirement);
//q5
let dailySteps = 11000; 
let stepGoal = 10000; 
console.log(dailySteps >= stepGoal);

// less than <
//q1
let studentsMarks = 30;
let failMarks = 35;

console.log(studentsMarks < failMarks);
//q2
let totalExpenses = 8000;
let spendingLimit = 10000;

console.log(totalExpenses < spendingLimit);
//q3
let stockCount = 7;
let stockLimit = 10;

console.log(stockCount < stockLimit);
//q4
let vehicleSpeed = 40;
let speedMinimum = 50;

console.log(vehicleSpeed < speedMinimum);
//q5
let timeLeft = 4;
let warningTime = 5;

console.log(timeLeft < warningTime);

// Greater Than or Equal >=
//q1
let voterAge = 18;
let votingRequirement = 18;

console.log(voterAge >= votingRequirement);
//q2
let studentPercentage = 75;
let scholarshipMinimum = 75;

console.log(studentPercentage >= scholarshipMinimum);
//q3
let subscriberAge = 14;
let ageRequirement = 13;

console.log(subscriberAge >= ageRequirement);
//q4
let currentPoints = 500;
let pointsNeeded = 500;

console.log(currentPoints >= pointsNeeded);
//q5
let workExperience = 3;
let experienceNeeded = 2;

console.log(workExperience >= experienceNeeded);

// less  than or equal <=
//q1
let liftPeople = 7;
let liftCapacity = 8;

console.log(liftPeople + 1 <= liftCapacity);
//q2
let uploadSize = 5;
let fileLimit = 5;

console.log(uploadSize <= fileLimit);
//q3
let juniorAge = 12;
let juniorAgeLimit = 12;

console.log(juniorAge <= juniorAgeLimit);
//q4
let usedData = 9.5;
let dataLimit = 10;

console.log(usedData <= dataLimit);
//q5
let classStudents = 40;
let classLimit = 40;

console.log(classStudents <= classLimit);


//Part-D
//Logical operators

// 1.Logical And &

// Question 1
let username1 = "admin";
let password1 = 1234;
console.log(username1 === "admin" && password1 === 1234); // true

// Question 2
let isLoggedIn2 = true;
let hasPermission2 = true;
console.log(isLoggedIn2 && hasPermission2); // true

// Question 3
let inStock3 = true;
let price3 = 800;
console.log(inStock3 && price3 < 1000); // true

// Question 4
let marks4 = 75;
let attendance4 = 80;
console.log(marks4 > 65 && attendance4 > 70); // true

// Question 5
let isWeekend5 = true;
let isHoliday5 = false;
console.log(isWeekend5 && isHoliday5); // false

// Question 6
let a6 = 0;
let b6 = 10;
let result6 = a6 && b6;
console.log(result6); // 0

// Question 7
let x7 = 5;
let y7 = 10;
let result7 = (x7 > 3 && y7) || 0;
console.log(result7); // 10

// Question 8
let p8 = "Hello";
let q8 = "";
let r8 = "World";
let result8 = p8 && q8 && r8;
console.log(result8); // ""

// Question 9
let val9 = 5;
let condition9 = val9 && (val9 = 0);
console.log(condition9); // 0
console.log(val9); // 0

// Question 10
let x10 = 10;
let y10 = 20;
let result10 = (x10 && y10) && (x10 > y10);
console.log(result10); // false



//2. Logical OR

// Question 1
let passwordCorrect1 = true;
let otpValid1 = false;
console.log(passwordCorrect1 || otpValid1); // true

// Question 2
let isMember2 = false;
let hasCoupon2 = true;
console.log(isMember2 || hasCoupon2); // true

// Question 3
let age3 = 16;
let height3 = 155;
console.log(age3 > 18 || height3 > 150); // true

// Question 4
let emailGiven4 = true;
let phoneGiven4 = false;
console.log(emailGiven4 || phoneGiven4); // true

// Question 5
let score5 = 900;
let timeBonus5 = true;
console.log(score5 > 1000 || timeBonus5); // true

// Question 6
let a6or = 0, b6or = false, c6or = "", d6or = null, e6or = 42;
console.log(a6or || b6or || c6or || d6or || e6or); // 42

// Question 7
let x7or = "Hello" || 0;
let y7or = 0 || "Hi";
console.log(x7or, y7or); // Hello Hi

// Question 8
let a8or = 10, b8or = 20;
console.log((a8or < 5) || (b8or > 15)); // true

// Question 9
let val9or = 5;
let condition9or = val9or || (val9or = 0);
console.log(condition9or); // 5
console.log(val9or); // 5

// Question 10
console.log("" || 0 || false || null || undefined || "OK"); // OK


//3. Logical NOT

// Question 1
let isBanned1 = false;
console.log(!isBanned1); // true

// Question 2
let isCompleted2 = false;
console.log(!isCompleted2); // true

// Question 3
let isOn3 = true;
console.log(!isOn3); // false

// Question 4
let isActive4 = false;
console.log(!isActive4); // true

// Question 5
let isReadOnly5 = false;
console.log(!isReadOnly5); // true

// Question 6
let a6not = 0, b6not = 1;
console.log(!a6not, !b6not); // true false

// Question 7
let x7not = "Hello", y7not = "";
console.log(!x7not, !y7not); // false true

// Question 8
let val8not = 5;
console.log(!val8not); // false

// Question 9
let a9not = 10, b9not = 20;
console.log(!(a9not && b9not)); // false

// Question 10
let x10not = 0, y10not = 1;
console.log(!(x10not || y10not)); // false


// 4. Mixed Logical Operators
// Question 1
let isMember1m = true, isBanned1m = false;
console.log(isMember1m && !isBanned1m); // true

// Question 2
let isStudent2m = true, isSenior2m = false, isBanned2m = true;
console.log((isStudent2m || isSenior2m) && !isBanned2m); // false

// Question 3
let nameGiven3m = true, emailGiven3m = false, phoneGiven3m = true;
console.log(nameGiven3m && (emailGiven3m || phoneGiven3m)); // true

// Question 4
let isAdmin4m = true, hasToken4m = false, isSuspended4m = false;
console.log((isAdmin4m || hasToken4m) && !isSuspended4m); // true

// Question 5
let score5m = 1200, timeBonus5m = false, extraLife5m = true;
console.log(score5m > 1000 && (timeBonus5m || extraLife5m)); // true

// Question 6
let a6m = 0, b6m = 10, c6m = 20;
console.log(a6m || b6m && c6m); // 20

// Question 7
let p7m = true, q7m = false, r7m = true;
console.log(p7m && q7m || r7m); // true

// Question 8
let x8m = 10, y8m = 20;
console.log(!(x8m && y8m) || (x8m > 5 && y8m < 30) && true); // true

// Question 9
let a9m = 5, b9m = 0, c9m = 10;
console.log(a9m && b9m || c9m); // 10

// Question 10
let val1_10m = false, val2_10m = true, val3_10m = false;
console.log(!(val1_10m || val2_10m) && val3_10m || true); // true


//Part-E

// Part a — Question 1
let counter1 = 5;
counter1++;
console.log(counter1); // 6

// Part a — Question 2
let lives2 = 3;
lives2--;
console.log(lives2); // 2

// Part a — Question 3
let score3e = 10;
score3e++;
console.log(score3e); // 11

// Part a — Question 4
let items4 = 8;
items4--;
console.log(items4); // 7

// Part a — Question 5
let count5 = 0;
count5++;
count5++;
console.log(count5); // 2

// Part b — Question 6
let x6e = 5;
let y6e = x6e++;
console.log(x6e, y6e); // 6 5
// x++ returns the old value, then increments x.

// Part b — Question 7
let a7e = 5;
let b7e = ++a7e;
console.log(a7e, b7e); // 6 6
// ++a increments first, then returns the new value.

// Part b — Question 8
let lives8e = 3;
let previousLives8e = lives8e--;
console.log(lives8e, previousLives8e); // 2 3

// Part b — Question 9
let attempts9e = 0;
let currentAttempts9e = ++attempts9e;
console.log(attempts9e, currentAttempts9e); // 1 1

// Part b — Question 10
let points10e = 100;
points10e++;
points10e--;
console.log(points10e); // 100

// Part c — Question 11
let x11e = 10;
let y11e = x11e++;
let z11e = ++x11e;
console.log(x11e, y11e, z11e); // 12 10 12

// Part c — Question 12
let a12e = 5;
let b12e = a12e-- + ++a12e;
console.log(a12e, b12e); // 5 10

// Part c — Question 13
let m13e = 7;
let n13e = --m13e + m13e++;
console.log(m13e, n13e); // 7 13

// Part c — Question 14
let p14e = 3;
let q14e = p14e++ + ++p14e + p14e;
console.log(p14e, q14e); // 5 13

// Part c — Question 15
let val15e = 0;
val15e = val15e++ + ++val15e;
console.log(val15e); // 1

//Part-F
//Type of operator

// Part a — Question 1
let name1f = "Rahul";
console.log(typeof name1f); // string

// Part a — Question 2
let age2f = 25;
console.log(typeof age2f); // number

// Part a — Question 3
let isStudent3f = true;
console.log(typeof isStudent3f); // boolean

// Part a — Question 4
let city4f;
console.log(typeof city4f); // undefined

// Part a — Question 5
console.log(typeof null); // object (JavaScript historical behavior)

// Part b — Question 6
console.log(typeof 42); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined

// Part b — Question 7
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object

// Part b — Question 8
console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(typeof function(){}); // function

// Part b — Question 9
let price9f = 99.99;
let message9f = "Welcome";
let isActive9f = false;
console.log("price:", typeof price9f); // number
console.log("message:", typeof message9f); // string
console.log("isActive:", typeof isActive9f); // boolean

// Part b — Question 10
let value10f = null;
console.log(typeof value10f); // object
console.log(typeof value10f === "object"); // true

// Part c — Question 11
console.log(typeof typeof 100); // string
console.log(typeof typeof "Hi"); // string
console.log(typeof typeof true); // string

// Part c — Question 12
let a12f = 10, b12f = "10";
console.log(typeof a12f === typeof b12f); // false
console.log(typeof a12f == typeof b12f); // false

// Part c — Question 13
console.log(typeof null === "object"); // true
console.log(typeof [] === "object"); // true
console.log(typeof {} === "object"); // true

// Part c — Question 14
let x14f;
console.log(typeof x14f); // undefined
x14f = null;
console.log(typeof x14f); // object
x14f = 0;
console.log(typeof x14f); // number

// Part c — Question 15
console.log(typeof NaN === "number"); // true
console.log(typeof Infinity === "number"); // true
console.log(typeof (1 / 0)); // number

//Part-G type coercion
// Part a — Question 1
let number1g = Number("25");
console.log(number1g + 10); // 35

// Part a — Question 2
let number2g = 100;
console.log(String(number2g) + " rupees"); // 100 rupees

// Part a — Question 3
console.log(Boolean(0)); // false

// Part a — Question 4
console.log(Boolean("Hello")); // true

// Part a — Question 5
console.log(+"50" * 2); // 100

// Part b — Question 6
console.log("10" - 5); // 5
console.log("10" + 5); // "105"
console.log("10" * 2); // 20
console.log("10" / 2); // 5

// Part b — Question 7
console.log("5" - "2"); // 3
console.log("5" + "2"); // "52"
console.log("5" * "2"); // 10
console.log("5" / "2"); // 2.5

// Part b — Question 8
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// Part b — Question 9
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false

// Part b — Question 10
console.log(String(100)); // "100"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(100 + ""); // "100"

// Part c — Question 11
console.log("5" + 3 + 2); // "532"
console.log(5 + 3 + "2"); // "82"
console.log("5" - 3 + 2); // 4
console.log(5 - "3" + "2"); // "22"

// Part c — Question 12
console.log(true + true); // 2
console.log(true + false); // 1
console.log(true + "false"); // "truefalse"
console.log(false + "true"); // "falsetrue"

// Part c — Question 13
console.log(null + 5); // 5
console.log(undefined + 5); // NaN
console.log(null + "5"); // "null5"
console.log(undefined + "5"); // "undefined5"

// Part c — Question 14
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]"
console.log({} + {}); // "[object Object][object Object]"

// Part c — Question 15
let a15g = "10";
let b15g = 5;
let c15g = a15g + b15g;
let d15g = a15g - b15g;
let e15g = +a15g + b15g;
console.log(c15g, typeof c15g); // 105 string
console.log(d15g, typeof d15g); // 5 number
console.log(e15g, typeof e15g); // 15 number

// Part c — Question 16
console.log(!!"Hello"); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!1); // true
console.log(!!null); // false
console.log(!!undefined); // false

// Part c — Question 17
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number("0")); // 0
console.log(Number(" 25 ")); // 25
console.log(Number("25px")); // NaN

// Part c — Question 18
let val1_18 = "5";
let val2_18 = 2;
console.log(val1_18 + val2_18); // "52"
console.log(+val1_18 + val2_18); // 7
console.log(val1_18 - val2_18); // 3
console.log(val1_18 * val2_18); // 10
console.log(val1_18 / val2_18); // 2.5


// BONUS MIXED PRACTICE

// Question 19
let count19 = 5;
console.log(typeof count19++); // number
console.log(count19); // 6
console.log(typeof ++count19); // number
console.log(count19); // 7

// Question 20
let x20 = "10";
let y20 = ++x20;
console.log(x20, y20, typeof x20, typeof y20); // 11 11 number number

// Question 21
let a21 = "5";
let b21 = a21++;
console.log(a21, b21, typeof a21, typeof b21); // 6 5 number string

// Question 22
console.log(typeof (1 + "2")); // string
console.log(typeof (1 - "2")); // number
console.log(typeof (1 * "2")); // number
console.log(typeof (1 / "2")); // number

// Question 23
let val23 = null;
console.log(typeof val23); // object
console.log(val23 + 1); // 1
console.log(val23 - 1); // -1
console.log(val23 * 1); // 0
console.log(Boolean(val23)); // false