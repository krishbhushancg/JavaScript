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
let MoneySpend=180;
totalMoney-=MoneySpend;
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
let areaOfCube=6*(edge**2);
console.log(`area:${areaOfCube}`);

//3.
let imageSizeFactor=3;
let areaGrowth=imageSizeFactor**2;
console.log(`total area growth: ${areaGrowth}`);




