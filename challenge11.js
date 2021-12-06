// Instructions
// (This challenge is worth 10 points)

// Your task is to write a function that will take in a list of platforms and a date as a string. That function will update the date property on the first platform with an empty date and then return the platform list.

// In other terms, for each platform of the platform list array, update the date of the first free one and then return the updated platform list.
// const missionDate = "2021-12-12"
// const platformList = [
// {
// name:"Platform A",
// bookDate:"2021-12-11"
// },
// {
// name:"Platform B",
// bookDate:undefined
// },
// {
// name:"Platform C",
// bookDate:undefined
// },
// ]
// Examples
// Input:

    const missionDate = "2021-12-12"
    const platformList = [
      {
        name:"Platform A",
        bookDate:"2021-12-11"
      },
      {
        name:"Platform B",
        bookDate:undefined
      },
      {
        name:"Platform C",
        bookDate:undefined
      },
    ] 
    
// Output:

//     const platformList = [
//       {
//         name:"Platform A",
//         bookDate:"2021-12-11"
//       },
//       {
//         name:"Platform B",
//         bookDate:"2021-12-12"
//       },
//       {
//         name:"Platform C",
//         bookDate:undefined
//       },
//     ] 

//////////////////////////////
// const bookFreePlatform = (platformList, missionDate) => {
//   //code here
// }


const bookFreePlatform = (platformList, missionDate) => {
    // const found = platformList.find(({bookDate}) => bookDate === undefined)
    // found.bookDate = missionDate
    // return platformList
    
    platformList.find(({bookDate}) => bookDate === undefined).bookDate = missionDate
    return platformList
}
console.log(bookFreePlatform(platformList, missionDate))



