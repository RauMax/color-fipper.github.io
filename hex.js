const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
const idSpan = document.getElementById("color-name")
const backGround = document.getElementById("back-ground")


btn.addEventListener("click", function(){
    let arr = []
    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 16)
        if(randomNumber === 10){
            arr.push("A")
        }
        else if(randomNumber === 11){
            arr.push("B")
        }
        else if(randomNumber === 12){
            arr.push("C")
        }
        else if(randomNumber === 13){
            arr.push("D")
        }
        else if(randomNumber === 14){
            arr.push("E")
        }
        else if(randomNumber === 15){
            arr.push("F")
        }
        else {
            arr.push(randomNumber)
        }
    }
    console.log(arr)
    let finalColor = ""
    for(let i = 0; i <= 5 ; i++){
        finalColor += arr[i]
    }
    console.log(finalColor)
    setBg(finalColor)
})


function setBg(color){
    backGround.style.backgroundColor = `#${color}`;
    console.log(`#${color}`)
    idSpan.textContent = `#${color}`
}