// Instructions
// (This challenge is worth 5 points)

// Your task is to create a function that will take in an array representing the roster of astronauts, and return an array containing the jobs of each astronaut as a string.

// In other terms, for each astronaut of the roster, you want to take the job and add it to a list, then return said list.

// Examples
// Input:
const exampleRoster = [
  {
    job:"Shuttle DJ"
  },
  {
    job:"Space Cook"
  }
] 
// Output:
//     ["Shuttle DJ", "Space Cook"]

//////////////////////////////////////
// const listAstronautJobs = (roster) => {
//   // code here
// }

const listAstronautJobs = (roster) => {
  return(Object.values(roster.map((i) => (i.job))))
}
console.log(listAstronautJobs(exampleRoster))

