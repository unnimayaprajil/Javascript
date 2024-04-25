const isBelowTen=(value)=>value<10
console.log(isBelowTen(15))
let array1 =[1,2,3,4,5,20]
let array2 =[6,7,8,9,10]
console.log("aray1",typeof(array1))
console.log(array1[1])
console.log(array1.at(1))
console.log(array1.concat(array2))
console.log([...array1,...array2])
console.log(array1.every(isBelowTen))
console.log(array1.fill(30,0,2))

let fruits =["apple","orange","grapes","mango"]
let filterValue = fruits.filter((value)=>value.length>5)
console.log(filterValue)
const findValue = fruits.find((value)=>value.length>5)
console.log(findValue)
const findIndexValue = fruits.findIndex((value)=>value.length>5)
console.log(findIndexValue)
const findLast = fruits.findLast((value)=>value.length>5)
console.log(findLast)
const findLastindex = fruits.findLastIndex((value)=>value.length>5)
console.log(findLastindex)

let numbers =[0,1,2,[3,4]]
console.log(numbers.flat())
console.log(numbers.forEach((number)=>console.log(number)))


array1.push(45)
console.log('array1',array1)
array1.pop()
console.log('array1 pop',array1)
array1.shift()
console.log('array1 shift',array1)
array1.unshift(38)
console.log('array1 unshift',array1)

let array4 = [2,3,1,6,4,9]
console.log('array4',array4)
array4.sort()
console.log('array4 sort',array4)
let reversedValue= array4.toReversed()
console.log('array4 reveresed',reversedValue)

let array6 =["a","b","c"]
console.log('join',array6.join())
console.log('join join',array6.join(" "))
console.log('join',array6.join("-"))
let array7 =[234,56,67,12,56,90,87,66]
console.log('array7 slice',array7.slice(2,4))