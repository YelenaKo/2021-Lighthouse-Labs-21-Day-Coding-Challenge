// Instructions
// (This challenge is worth 20 points)
// Your last (!) task is to write a function that will take in an array of exchanged messages and an array of organized data. The goal is to parse each message, add them to a list and return an object containing two keys, transcript with the messages, missionData with the missionData object.
// Each message should be parsed using the same structure as the first challenge;
// "Origin: Message"
// You can reuse the function of the first challenge if you want!
// Examples
// Input:
const exchanges = [
    {origin:"MC", message:"So how is it out there?"},
    {origin:"Shuttle", message:"Oh it's pretty nice!"},
    {origin:"MC", message:"Did you like the challenges?"},
]
    
const missionData = {
    astro:["...","..."], 
    bio:["..."], 
    physics:["..."]
}
// Output:
//  {
//    transcript:
//    [
//      "MC: So how is it out there?",
//      "Shuttle: Oh it's pretty nice!",
//      "MC: Did you like the challenges?"
//    ],
//    missionData:{
//      astro:["...","..."], 
//      bio:["..."], 
//      physics:["..."]
//    }
//  }
/////////////////////////////////////////////////////
// const parseMissionSummary = (exchanges, missionData) => {
//     // code here
// }


const parseMissionSummary = (exchanges, missionData) => {
    return {transcript: exchanges.map(i => i.origin + ": "+ i.message ), missionData}
}
console.log(parseMissionSummary(exchanges, missionData))
