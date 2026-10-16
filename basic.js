console.log("Hello, This is Bhavana");
num = 2 + 3;
console.log(num);
console.log(num+2);
let user="Bha\tvana Nagalla"
console.log(user)
let b= 4>5
console.log(typeof b) 
let y=parseInt("123 Bhavana")
let x=parseInt("N123 Bhavana")
console.log("x="+x) 
console.log("y="+y)
let n1=false
let n2=false
console.group(n1+n2)
let num1=10
console.log(++num1)
console.log(num1)
console.log(2**3)
let s1=""
let s2=false
console.log(s1==s2)

let num=2345678
console.log(num%10)
num=parseInt(num/10)
console.log(num)

console.log(num%10)
num=parseInt(num/10)
console.log(num)

console.log(num%10)
num=parseInt(num/10)
console.log(num)

console.log(num%10)
num=parseInt(num/10)
console.log(num)

console.log(num%10)
num=parseInt(num/10)
console.log(num)

let person = {
    name:{
        firstname:'Bhavana',
        lastname:'Nagalla'
    },
    age:'25',
    place:'nellore'
}

for(let key in person.name){
    console.log(key, person.name[key])
}

function greet(str){
    return `Hello ${str}!!`
}
let str=greet('Bhavana');
console.log(str);

let add=(num1,num2)=>num1+num2;
let result=add(5,7)
console.log(result)
 
let laptop={
    cpu:'i9',
    ram:16,
    brand:'HP',

    greet:function(){
        console.log("hello world")
        console.log(this.cpu)
    }
}
laptop.greet()

function Alien(name,tech){
    this.name=name;
    this.tech=tech;
    this.work=function(){
        console.log("solving bugs from 12hrs")
    }
}

let alien1=new Alien('Bhavana','JS');
let alien2=new Alien('Satya','React');
console.log(alien1);
alien1.tech='blockchain';
console.log(alien1);
alien1.work(); 

let arr=[]
arr.push(3)
arr.push(4)
arr[3]=6
arr[2]='Bhavana'
arr[3]=function(){
    console.log("Hello world")
}
console.log(arr)
arr[3]()
console.log(arr.push(2))
console.log(arr.pop())
console.log(arr.shift())
console.log(arr.unshift(9))
console.log(arr)

let data=[3,6,12,43,134,10,23]
console.log(data)
console.log(data.length)

let fruits=["Banana","orange","mango"]
console.log(typeof fruits)
let str=fruits.toString()
console.log(typeof str)
console.log(fruits.at(2))
let arr=Array.isArray(fruits)
console.log(arr)
 
let fruits=["banana","orange","apple","mango","banana","guava "]
fruits.splice(2,0,"lemon","kiwi")
console.log(fruits)
fruits.splice(0,1)
console.log(fruits)
fruits.toSpliced(0,1)
console.log(fruits)

let arr=fruits.slice(1,3)
console.log(arr)
console.log(fruits)
console.log(fruits.indexOf("orange"))
console.log(fruits.lastIndexOf("banana"))
console.log(fruits.includes("Mango"))
console.log(fruits.includes("mango"))
console.log(fruits.sort())
console.log(fruits)
console.log(fruits.toSorted())
console.log(fruits)
console.log(fruits.reverse())

let vegies=["potato","brinjal","drumstick","tomato"]
const combo=fruits.concat(vegies)
console.log(combo)
combo.copyWithin(2,0)
console.log(combo)

let data=[4,3,8,2,7]
console.log(data.splice(2,2))
console.log(data.splice(2,2, 23, 13))
console.log(data)

let nums=[];
nums[0]=5;
nums[99]=10;
console.log(nums)
for(let n of nums)
    console.log(n)

for(let n in nums)
    console.log(nums[n])

let nums=[3,8,1,4]
let [a,b,,d]=nums
console.log(b)

let words="My Name is Bhavana Nagalla from gudur".split(' ')
let [a,b,, ...d]=words
console.log(d)

let nums=[42,51,24,98,65,12];
let result=nums.filter(n=>n%2===0)
    .map(n=>n* 2)
    .reduce((a,b)=>a+b)
console.log(result)

let nums=new Set("BOOKEEPER")
console.log(nums)

let nums=new Set()
nums.add(3)
nums.add(4)
nums.add("Bhavana")
nums.add("Harika")
nums.add(7)
nums.add(7) 
console.log(nums instanceof Set)

let mySet=new WeakSet();
let myObj={fname:"Bhavana",lname:"Nagalla"}
mySet.add(myObj)
console.log(mySet.has(myObj))

nums.forEach(value=>{
    console.log(value)
})

console.log(nums.has(6))

let map=new Map();
map.set("Bhavana","Java");
map.set("satya","python")
map.set("gayathri","AI")
map.set("Bhavana","react")
console.log(map.get("satya"))
console.log(typeof map)
console.log(map instanceof Map)

map.delete("satya")
console.log(map.size)
map.clear()
console.log(map.size)
console.log(map.has("satya"))
map.set("bhavana","400")
console.log(map.size)

map.forEach((v,k)=>{
    console.log(k+":"+v)
})

for(let [k,v] of map){
    console.log(k,":",v)
}
map.forEach((v,k)=>{
    console.log(k,":",v);
})

// Rgular expression
let text="visit W3Schools"
let n=text.search(/W3schools/i)
let n=text.match(/W3schools/i)
let n=text.replace(/w3schools/i,"Microsoft")
let text="Black, white, red, green, blue, yellow"
let res=text.match(/red|green|blue/g)
console.log(res)

let nums="1,10 or 1000?"
const pat=/10?/
let res=nums.match(pat)
console.log(res)

const pat=/^w3schools/
let text="w3schools tutorial"
let res=pat.exec(text)
console.log(res)

const person1={name:"bhavana"};
const person2={name:"harika"};
const person3={name:"ganesh"};

function greet(greeting){
    return greeting+" "+this.name;
}
let message=greet.call(person3,"Hello");
console.log(message);

let check= typeof null === "object"
console.log(check)

let arr=[20,30,40,60]
let res=arr.forEach(num=>console.log(num*2))
console.log(res)

const user={
    name:"Bhavana",
    address:{
        place:"Nellore"
    }
}

const copy=structuredClone(user)
console.log(copy)
copy.address.place="Gudur"
console.log(user)
console.log(copy)