// Instructions
// (This challenge is worth 20 points)

// Your task is to write a function that will take in a launch date and a mission name as strings. Calculate the difference between two dates in days and return an object containing the name of the mission and a rounded day difference.

// A part of the code has been written for you, and it is important that it stays the same for the tests to work out.

// Examples
// Input:

const launchDate = "2021-12-12"
const fakeToday = "2021-12-01"
const missionName = "Moon visit"
    
// Output:

//     {
//       missionName = "Moon visit",
//       daysRemaining = 11
//     }

// const timeRemaining = (launchDate, missionName, fakeToday) => {
//   const today = fakeToday || new Date() // Do not alter this line!

//   // Code here!
// }   

const timeRemaining = (launchDate, missionName, fakeToday) => {
    const today = fakeToday || new Date() // Do not alter this line!
    return{
        missionName:missionName,
        daysRemaining:((Date.parse(launchDate) - Date.parse(fakeToday)))/ 8.64e+7,
        // 8.64e+7 = 8.64 x 10^7
        fgt:((Date.parse(launchDate) - Date.parse(fakeToday)))
    }
    

}

console.log(timeRemaining(launchDate, missionName, fakeToday))