
### Challenge 1
Function that takes two parameters and returns a string
```
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
```
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
```
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
```
const someToggle = {
    name:"toggleA",
    isOn:false
}
const switchToggle = (toggle) => { 
    toggle.isOn === false ? toggle.isOn = true : toggle.isOn = false; 
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
```
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


