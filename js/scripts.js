const obj1 = {
    property1 : "value1",
    property2 : "value2",
    property3 : "value3"
}
console.log('obj1',obj1)
//  console.log('map',obj1.map((item)=>item.property1)) 
const obj2 = []
console.log('map',obj2.map((item)=>item)) 

function MyObj(fname,lname,age){
 this.fname=fname,
 this.lname=lname,
 this.age=age
}
const obj3 = new MyObj("Unnimaya","m",28);
console.log('obj3',obj3)
console.log('age',obj3.age)

const fruits ={
    name :"apple",
    color:"red",
    shape:"round"
}
console.log('color',fruits.color)
console.log('color',fruits["color"])

const arrayofobjects =[
    {
        name:"unnimaya",
        age:28
    },
    {
        name:"arohi",
        age:2
    }
]
console.log('arrayofobjects',arrayofobjects)
console.log('arrayofobjects map',arrayofobjects.map((item)=>item.name))
 let array2=[2,3];
 console.log('array map',array2?.map((item)=>item))