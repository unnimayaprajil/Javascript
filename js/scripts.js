const myFunction = ()=>{
setTimeout(()=>{
    console.log('Timeout hello')
},5000)
}
async function myFun2(){
    console.log('helloo1')
   const data = await myFunction();
   console.log('data',data)
    console.log('helloo2')
}
myFun2()
