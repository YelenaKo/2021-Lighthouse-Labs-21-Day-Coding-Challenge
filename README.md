
### Challenge 1
Function that takes two parameters and returns a string
```javascript
const parseMessage = (origin, message) => {
      return(origin + ": " + message)
}
console.log(parseMessage("Mission Control", "Hello there!")) 
```
```
Output:
  Mission Control: Hello there!
```

### Challenge 2
Function that takes an object as a parameter and returns a string.
```javascript
const exampleAstronaut = {
    firstName: "Neil",
    lastName: "Armstrong",
    nickname: "Steps",
    prefix: "Astronaut"
}
const generateAstronautTag = (astronaut) => {
    return(`${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`)
}
console.log(generateAstronautTag(exampleAstronaut))
```
```
Output:
  Astronaut: Neil "Steps" Armstrong
```

### Challenge 3
Function that takes an object as a parameter, and returns `true` if the current value is between the min and max, and returns `false` if outside.
```javascript
const exampleGauge = {
    current:0.4,
    min:0.1,
    max:0.9
}
const checkGaugeStatus = (gauge) => (gauge.current > gauge.min && gauge.current < gauge.max) ? true : false 
console.log(checkGaugeStatus(exampleGauge))
```
```
Output:
  true
```

### Challenge 4
Toggle function that changes the value between true and false and returns the updated object. 
```javascript
const someToggle = {
    name:"toggleA",
    isOn:false
}
const switchToggle = (toggle) => { 
    toggle.isOn =!toggle.isOn;  
    return toggle
}
console.log(switchToggle(someToggle))
```
```
Output:
{ name: 'toggleA', isOn: true }
```

### Challenge 5
Function that assigns properties to object
```javascript
const exampleAstronaut = {
    firstName:"Chris",
    lastName: "Hadfield",
    nickname:"Space Oddity",
    prefix:"Astronaut"
}
const addJobToAstronaut = (astronaut, job) => { 
    astronaut.job = job
    return astronaut
} 
console.log(addJobToAstronaut(exampleAstronaut, "Shuttle DJ"))
```
```
Output:
{
  firstName: 'Chris',
  lastName: 'Hadfield',
  nickname: 'Space Oddity',
  prefix: 'Astronaut',
  job: 'Shuttle DJ'
}
```

### Challenge 6
*array*`.push()` 

> adds new items ***to the end*** of an array. <br>
> changes the length of the array and ***returns the new length*** 

> *array*`.pop()` removes last element, returns the removed element <br>
> *array*`.shift()` removes the first item, returns the removed element <br>
> *array*`.unshift()` adds new elements to the beginning of an array, overwrites the original array

Function that takes an array and object, then push an object to the array and return the updated array
```javascript
const exampleRoster = []
const exampleAstronaut = {
    firstName:"Chris",
    lastName: "Hadfield",
}
const addAstronautToRoster = (roster, astronaut) => {
    roster.push(astronaut)
    return(roster)
}
```
```
Output:
[
  {
    firstName: 'Chris',
    lastName: 'Hadfield',
  }
]
```

