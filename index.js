let randomNum1 = Math.floor(Math.random() * 6 + 1)

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNum1 + ".png")


let randomNum2 = Math.floor(Math.random() * 6 + 1)

document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNum2 + ".png")

if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else if (randomNum2 === randomNum1)
    document.querySelector("h1").innerHTML = "Draw!"
else
    document.querySelector("h1").innerHTML = "Player 1 wins!"