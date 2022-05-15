const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn")
const idSpan = document.getElementById("id-span")
const backGround = document.getElementById("back-ground")


let counter = 0
backGround.style.backgroundColor = colors[counter]
idSpan.textContent = colors[0]
console.log(counter)
console.log(colors[counter])
btn.addEventListener("click", function(){
    if(counter <= 2){
        counter++
    }
    else if(counter >= 3 ){
        reset()
    }
    console.log(counter)
    console.log(colors[counter])
    idSpan.textContent = colors[counter]
    setBg(colors[counter])
})

function reset(){
    counter = 0
}

function setBg(color){
    backGround.style.backgroundColor = color;
}

function randomize(){
    let arr = []
    let exaColor = ""
    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 16)
        if(randomNumber === 10){
            arr.push("A")
            exaColor += "A"
        }
        else if(randomNumber === 11){
            arr.push("B")
            exaColor += "B"
        }
        else if(randomNumber === 12){
            arr.push("C")
            exaColor += "C"
        }
        else if(randomNumber === 13){
            arr.push("D")
            exaColor += "D"
        }
        else if(randomNumber === 14){
            arr.push("E")
            exaColor += "E"
        }
        else if(randomNumber === 15){
            arr.push("F")
            exaColor += "F"
        }
        else {
            arr.push(randomNumber)
            exaColor += randomNumber
        }
        exaColor += randomNumber
    }
    console.log(arr)
    console.log(exaColor)
    let finalColor = ""
    for(let i = 0; i <= 5 ; i++){
        finalColor += arr[i]
    }
    console.log(finalColor)
}

randomize()