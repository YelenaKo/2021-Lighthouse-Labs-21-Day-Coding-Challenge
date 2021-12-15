// Instructions
// (This challenge is worth 10 points)
// Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. If one of the values is a mismatch, return false, if everything is fine, return true.
// Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to the values inside the dataEntries object values.
// Examples
// Input:
const speed = 40
const missionData = {
  astro:["...","..."], 
  bio:["..."], 
  physics:["..."]
}

const checks = {
  maxSpeed:50,
  minSpeed:20,
  dataEntries:{
    astro:3,
    bio:1,
    physics:1
  }
}
// Output:
// false // Not the same amount of entries
////////////////////////////////////////////////////
// const confirmReentryPlans = (speed, missionData, checks) => {
//   //code here
// }

const confirmReentryPlans = (speed, missionData, checks) => {
  return (speed > checks.minSpeed && speed < checks.maxSpeed) 
  ? (Object.keys(checks.dataEntries).find((i)=> checks.dataEntries[i] !== missionData[i].length) ? false : true) 
  : false
}
console.log(confirmReentryPlans(speed, missionData, checks))