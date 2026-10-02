const prompt = require('prompt-sync')();

//Part-1
//for loop

//q1
let arr=[28, 32, 25, 40, 18, 35];
let sum1=0;

for (let i=0; i<=arr.length-1; i++){
    if (arr[i]>30){
        sum1+=1
    }
}
console.log(`number of days hotter than 30 C: ${sum1}`);


//q2
n2=Number(prompt("enter number: "));
let sum2=0;
for (let i=n2; i>0; i=Math.floor(i/10)){
    sum2+=i%10;
}
console.log(sum2);


//q3
for (let i=1; i<=100; i++){
    if (((i%3==0) && (i%5==0)) && (i%7!=0)){
        console.log(i);
    }
}


// q4
let word="JavaScript";
let str2="";
let vowel=0;

for(let i=0; i<=word.length-1; i++){
    if (word[i]=="a" || word[i]=="e" || word[i]=="i" || word[i]=="o" || word[i]=="u" || word[i]=="A" || word[i]=="E" || word[i]=="I" || word[i]=="O" || word[i]=="U"){
        vowel+=1
}
    else{
        str2+=word[i]
};

}
    console.log(str2);



//q5
let arr5=[23, 34, 45, 56, 50];
let count=0;
for (let i=0; i<=arr5.length-1; i++){
    count=0
    for (let j=0; j<=arr5.length-1; j++){
        if (arr5[i]<arr5[j]){
            count+=1
        }
    }
    if (count===1){
        console.log(arr5[i])
    }
}



//q6
n6=Number(prompt("enter number: "));
let sum6=0;
let N=n6/2;
for (let i=1;i<=N;i++){
    if(n6%i==0){
        sum6+=i;
    }
}
if(sum6==n6){
    console.log("is a perfect number")
}
else{
    console.log("not a perfect number")
}



//q7
for (let i=1; i<=128; i*=2){
    console.log(i)
}



//q8
let n=20;
let a=0, b=1;
console.log(a);
console.log(b);

for (let i=2; i<n; i++){
    let next =a+b;
    console.log(next);
    a=b;
    b=next;
}



//q9
let arr9=[45, 78, 90, 32, 56, 88];
let above=0;
let sum9=0;
for (let i=0; i<=arr9.length-1; i++){
    sum9+=arr9[i]
}
let average=sum9/arr9.length;
for (let i=0; i<=arr9.length-1; i++){
    if(arr9[i]>average){
    above+=1
    }
}

console.log(`average: ${average}`);
console.log(`students scored above average: ${above}`);


// q10








// Part
// break inside a for Loop

//q1
let arr1=[1, 2, 7, 8, 9, 4, 6, 5];
for (let i=0; i<=arr1.length-1; i++){
    if (arr1[i]===7){
        console.log(`index: ${i}`)
        break
    }
}


//q2

let pass=900;
for (let i=1; i<=5; i++){
    let n2=Number(prompt("enter password: "));
    if (n2===pass){
        console.log("access granted");
        break
    }
    if (i===5){
        console.log("account locked");
    }
}


//q3
let sum3=0;

for (let i=1; i<=100; i++){
    sum3+=i;
    if (sum3>100){
        console.log("exceeded")
        console.log(`Last number added: ${i}`)
        break
    }
}


//q4

let arr4=["krish", "Swati", "harsh", "arush"];

for (let i=0; i<=arr4.length-1; i++){
    if (arr4[i][0]==="S"){
        console.log(arr4[i]);
        break;
    }
}


//q5
for (let i=1; i<=50; i++){
    console.log(i)
    if((i**(1/2))%1===0 && i>20){
        break;
    }
}


// Part - continue inside a for Loop
//q1
for (let i=1; i<=30; i++){
    if (i%4===0){
        continue;
    }
    console.log(i)
}


//q2
let arr02=[1, 2, -8, -9, -7, -8, 9, 4, 6, 5];
let sum=0;

for (let i=0; i<=arr02.length-1; i++){
    if (arr02[i]<0){
        continue;
    }
    sum+=arr02[i];
}
console.log(`sum: ${sum}`);


//q3
let str3="Hello World";
let str30=""
for (let i=0; i<=str3.length-1; i++){
    if (str3[i]===" "){
        continue
    }
    else{
        str30+=str3[i];
    }
}   
console.log(str30)


//q4
for (let i=1; i<=12; i++){
    let prod=(6*i);
    if (prod%5===0){
        continue;
    }
    console.log(prod);
}


//q5
let age=[12, 18, 25, 15, 30, 17, 22];
for (let i=0; i<=age.length-1; i++){
    if (age[i]<18){
        continue;
    }
    console.log(age[i]);
}
