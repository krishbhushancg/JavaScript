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

