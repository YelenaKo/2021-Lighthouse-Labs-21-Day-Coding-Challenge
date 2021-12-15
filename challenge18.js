// Instructions
// (This challenge is worth 10 points)
// Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the most votes.
// There is always two lunch choices, and always an odd number of astronauts!
// Examples
// Input:
const listOfChoices = [
    "Chicken Dinner",
    "Chicken Dinner",
    "Chicken Dinner",
    "Ice Cream Sandwich", 
    "Ice Cream Sandwich"
]
// Output:
//     Chicken Dinner

/////////////////////////////////////
// const chooseLunchWinner = (listOfChoices) => {
//     // code here
// }


const chooseLunchWinner = (listOfChoices) => {
    /* for two lunch choices */

    // let a = listOfChoices.filter(e => listOfChoices.indexOf(e) == 0);
    // let b = listOfChoices.filter(i => i !== a[0]);
    // return ( a.length > b.length ? a[0] : b[0])

    /* for any lunch choices */
    let countedNames = listOfChoices.reduce(function (allNames, name) {
        (name in allNames) ? allNames[name]++ : allNames[name] = 1
        return allNames
    }, {})

    let mostVotes = (countedNames) => {
        return Object.entries(countedNames)
        .reduce(( [choicesA, a], [choicesB, b]) => a > b ? [choicesA, a] : [choicesB, b] )[0];
    }
    return mostVotes(countedNames)
}  

console.log(chooseLunchWinner(listOfChoices))