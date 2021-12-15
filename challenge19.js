const listOfReceivedData = [
    {type: "astro", data: "Saturn Data"},
    {type: "bio", data: "Space Potatoes"},
    {type: "physics", data: "Lagrange Points"},
    {type: "bio", data: "OMG Tardigrades"},
    {type: "physics", data: "Material reflectivity"},
    {type: "astro", data: "Mercury is not the hottest"},
]

const organizeData = (receivedData) => {
    let newObj = receivedData.reduce((prevState, curentElement)=> {

        prevState[curentElement.type] = !prevState[curentElement.type]? [curentElement.data]:
        [...prevState[curentElement.type], curentElement.data]
        return prevState 
    }, {})

    return newObj
}

console.log(organizeData(listOfReceivedData))




















// const mapped = receivedData.map(item => ({[item.type]: Object.entries(item.data)}));
// const newObj = Object.assign({}, ...mapped );
// return newObj;
// output:
// [
//     { type: 'astro', data: 'Saturn Data' },
//     { type: 'bio', data: 'Space Potatoes' },
//     { type: 'physics', data: 'Lagrange Points' },
//     { type: 'bio', data: 'OMG Tardigrades' },
//     { type: 'physics', data: 'Material reflectivity' },
//     { type: 'astro', data: 'Mercury is not the hottest' }
//   ]