// forEach Ex

const coding = ['js',"react",'HTML','CSS']
coding.forEach((item)=>{
    // console.log(item);
    
})


// Fliter

// const myNum = [1,2,3,4,5,6,7,8,9,10]
// const TotalNum = myNum.filter((item)=> item>=5)
// console.log(TotalNum);

// const valueMap = myNum.map((item)=> item  + 0).map((item)=> item *10).filter((item)=> item >=30)
// console.log(valueMap);


const myNum = [1,2,3,4,5,6,7,8,9,10]
// const map = myNum.filter((num)  => num >5).map((num) => num + 10 ).map((num) => num +4)
// console.log(map);
 

// Map

const myNumMap = [1,2,3,4,5,6,7,8,9,10]
const map = myNumMap.map((num)=> num *10)
// console.log(map);

//Chain

// const myChain = [1,2,3,4,5,6,7,8,9,10]
// const myChainValue = myChain.filter((num)=> num >=5).map((num)=> num *10).map((num)=> num * 100).map((num)=> num / 10).filter((num)=> num>800)
// console.log(myChainValue);


//practice 
const myarr = [100,200,300,400,500,600,700,800,900,1000]
// myarr.forEach((item)=>{
//     console.log(item);
    
// })

const coding3 = myarr.filter((num)=>num >=700)         // fliter
// console.log(coding3);

const coding4 = myarr.map((num)=> num / 10)            // map
// console.log(coding4);

const chainValue = myarr.map((num)=> num+1).filter((num)=> num>=800)   // chaining
// console.log(chainValue);

const chainingValue = myarr.filter((num)=> num >= 900).map((num)=> num *10)
// console.log(chainingValue);


// reduce

const myred = [1,2,3,4] 
// let value of the Array
const myred2 = myred.reduce((acc,num)=> acc + num, 1)
// console.log(myred2)


const carsBrand = [
    {
        car:"Q3",
        Brand:"Audi"
    },
    {
        car:"A3",
        Brand:"BMW"
    },
    {
        car:"v1",
        Brand:"Royal"
    },
    {
        car:"oo7",
        Brand:"Honda"
    },
    {
        car:"x90",
        Brand:"vok"
    }
]

const carValue = carsBrand.reduce((acc,item)=> acc +item.car,0 )
const carValue2 = carsBrand.reduce((acc,item)=> acc +item.Brand,0 )

console.log(carValue);
console.log(carValue2);
const carValue3 = carsBrand.reduce((acc,val)=> acc + val.car,  0  )
console.log(carValue3);



