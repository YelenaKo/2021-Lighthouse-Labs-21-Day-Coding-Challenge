// Instructions
// (This challenge is worth 10 points)

// Your task is to write a function that will take in an array of objects containing switches. The function will change the value of the isOn property to true for every switch in the list, and then return the updated array.

// You can use the previous switchToggle function from the fourth challenge, however be careful, since we want all of them on, not toggled!

// Examples
// Input:

const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]
    
// Output:

// [
// 	{
// 		name:"Air",
// 		isOn:true
// 	},
// 	{
// 		name:"Radio",
// 		isOn:true
// 	},
// ]

// const switchAllTogglesOn = (toggleList) => {
//     //code here
// }
	


const switchAllTogglesOn = (toggleList) => {
    return toggleList.map(i => ({...i, isOn: true}))
}

// const switchAllTogglesOn = (toggleList) => toggleList.map((i) => ({...i, isOn: true}))
console.log(switchAllTogglesOn(toggleList))