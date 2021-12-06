// Instructions
// (This challenge is worth 5 points)
// Your task is to create a function that will take in an array of weather objects and will return a rounded average of the wind speed.
// Since we work with an unknown amount of entries, you will need to calculate the average wind speed using loops.
// Examples
// Input:
const exampleEntries = [
    { 
        temperature:0, 
        weather:"sunny", 
        windDirection: "NNE", 
        windSpeed:24
    },
    { 
        temperature:10, 
        weather:"cloudy", 
        windDirection: "NNE", 
        windSpeed:9 
    }
] 
// Output:
//     17 

////////////////////////////////////////////////////
// const averageWindSpeed = (weatherEntries) => {
//     // code here
// }

const averageWindSpeed = (weatherEntries) => {
    // let windSpeedArr = (Object.values(weatherEntries.map((i) => (i.windSpeed))))
    // return Math.round((windSpeedArr.reduce((a, b) => a + b) / windSpeedArr.length)); 
    
    return Math.round((weatherEntries.reduce((a, b) => a + b.windSpeed, 0) / weatherEntries.length));    
}

console.log(averageWindSpeed(exampleEntries))