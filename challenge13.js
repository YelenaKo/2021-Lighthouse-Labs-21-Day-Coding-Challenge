// Instructions
// (This challenge is worth 5 points)

// Your task is to write a function that will take in an array of objects containing a gauge reading (min, max, current). The function will then check if the gauge current value is within spec (between min and max) and check the next gauge. If one of the values is outside the spec, return false, if they are all ok, return true.

// The method the evaluate the gauge is the same as the third challenge. You may take your function, get inspired by it, or start from scratch in this challenge.

// Examples
// Input:

const gaugeList = [
    {
    current:0.4,
    min:0.1,
    max:0.9
    },
    {
    current:1.2,
    min:0.1,
    max:0.6
    }
]
    
// Output:

//     false
//

// const checkAllGauges = (gaugeList) => {
//     // Code here!
// }
    

const checkAllGauges = (gaugeList) => {
    // return !gaugeList.some((i) => (i.current > i.min && i.current < i.max)? false : true )
    return gaugeList.every((i) => (i.current > i.min && i.current < i.max)? true : false )
}

console.log(checkAllGauges(gaugeList))