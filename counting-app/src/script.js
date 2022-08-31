let countEl = document.getElementById("count-el")

let firstCount = 0

function incrementCount() {
  firstCount += 1
  countEl.textContent = firstCount
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save() {
   // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
 let countStr = firstCount + " - " 
 
  // 3. Render the variable in the saveEl using innerText
 //saveEl.innerText += countStr
  
  saveEl.textContent += countStr
  countEl.textContent = 0
  firstCount = 0
  //console.log(firstCount)
}

//let message = "You have 3 new notifications"
//let username = "Houdini"
//console.log(message + ", " + username + "!")

//let user = "papiChulo"
//let newMessage = "Will you come tomorrow?"
  
//let messageToUser = user + "," + newMessage
//console.log(messageToUser)