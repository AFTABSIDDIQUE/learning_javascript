// {array map funtion}

// arr = [1,2,3,4,5];
// const arr1=arr.map((val)=>{
//     return val*2;
// })
// console.log(arr1);

// {array filter funtion}
// arr = [1,2,3,4,5];
// const arr1=arr.filter(val=>{

// })
// console.log(arr1);

// {array reduce}
// arr = [50,100,60,92,95];
// const red = arr.filter((val)=>{
//     return val>=90;
// })
// console.log(red);

// {Problem solving}

let number = prompt("Enter a number");
console.log(number);
let arr=[1];
for(let i=2;i<=number;i++){
    arr.push(i);
}
const sumArr = arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(sumArr);

const prodArr=arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(prodArr);