

// let number = prompt("Enter a number to see it is a multiple of 5")

// if(number%5==0){
//     console.log(number,"is multiple of 5")
// }
// else{
//     console.log(number,"is not a multiple of 5")
// }

// let number = prompt("Enter a number to fing grades");
// if(number<=100 && number>=90){
//     console.log("A")
// }else if(number<=89 && number>=70){
//     console.log("B");
// }else if(number<=69 && number>=60){
//     console.log("C")
// }else if(number<=50 && number>=59){
//     console.log("D")
// }else{
//     console.log("F")
// }

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log("i= ",i)
//     }
// }

// let guessingNum = 25
// let userNum = prompt("Enter a number for guessing")
// while(userNum!=guessingNum){
//     prompt("wrong number please try again...")
// }
// console.log("User has guess properly")
// let name = 'Aftab Siddique';
// let lastname="Siddique"; 
// let str = `Ceo of Apna Javascript is ${name}`;

// let name= prompt("Enter your name");
// let userName = "@"+name+name.length;
// console.log(userName);

// let heroes = ["thorr","ironman","hulk","batman"];
// for(let val in heroes){
//     console.log(heroes[val]);
// }

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// let marks=[ 96, 75, 48, 83, 66 ];
// let sum =0;
// for(let el in marks){
//     sum+=marks[el];
// }
// alert("Average of marks is "+sum/marks.length);

// function checkingVovels(str){
//     let count =0;
//     for(let e of str){
//     if(e=='a'||e=='e'||e=='i'||e=='o'||e=='u'){
//         count++;
//     }}
//     return count;
// }

// const checkingVovels=(str)=>{
//     let count =0;
//     for(let e of str){
//     if(e=='a'||e=='e'||e=='i'||e=='o'||e=='u'){
//         count++;
//     }
//     }
//     return count;
// }


// alert(checkingVovels("elephant"));

let arr = [1,2,3,4,5]

arr.forEach((val)=>{
    console.log(val*val);
})