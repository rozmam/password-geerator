const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordBoxOne = document.getElementById("btn-left")
let passwordBoxTwo = document.getElementById("btn-right")


function clickBtn() {
    let passwordOne = generatePasswordOne()
    let passwordTwo = generatePasswordTwo()
    passwordBoxOne.textContent = passwordOne
    passwordBoxTwo.textContent = passwordTwo
}

function generatePasswordOne() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor( Math.random() * characters.length)
        password += characters[randomNumber]
    }
    return password
}

function generatePasswordTwo() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        password += characters[randomNumber]
    }
    return password
}