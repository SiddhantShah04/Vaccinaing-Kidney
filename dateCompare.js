let d1 = new Date()
let d2 = new Date("2019","8","1")
console.log("d2",d2.getTime())
console.log("d1",d1.getTime())

if(d2.getTime() < d1.getTime()){console.log("d1 is greater")} 

