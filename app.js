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