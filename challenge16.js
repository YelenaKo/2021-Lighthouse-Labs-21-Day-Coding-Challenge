// Instructions
// (This challenge is worth 5 points)
// Your task is to write a function that will take in two position objects. Calculate the average speed from the two positions and return the average speed rounded to the first decimal point.
// Each object contains the altitude in meters, and a time stamp in seconds.
// Examples
// Input:
const firstPosition = {
    time: 1637074462,
    altitude: 1100
}
const secondPosition = {
    time: 1637074558,
    altitude: 2200
}
// Output:
//   11.5
///////////////////////////////////////////////
//   const getAverageSpeed = (firstPosition, secondPosition) => {
//     //code here
// }

const getAverageSpeed = (firstPosition, secondPosition) => {
    return Number(((secondPosition.altitude-firstPosition.altitude)/(secondPosition.time - firstPosition.time)).toFixed(1))
}
console.log(getAverageSpeed(firstPosition, secondPosition))