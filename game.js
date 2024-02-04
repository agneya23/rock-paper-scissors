let rock_btn = document.querySelector("#rock")
let paper_btn = document.querySelector("#paper")
let scissors_btn = document.querySelector("#scissors")

let map = {0: "rock", 1: "paper", 2: "scissors"}

let your_score = document.querySelector("#your-score")
let computer_score = document.querySelector("#computer-score")
let result = document.querySelector("#result")

function compute(your_choice) {
    comp_choice = Math.floor(Math.random() * 3)
    comp_choice = map[comp_choice]
    if (your_choice === comp_choice) {
        result.innerHTML = "<p>Draw</p>"
        result.style.backgroundColor = "#02024f"
    }
    else if (your_choice === "rock" && comp_choice === "paper") {
        computer_score.innerHTML = "<p>"+(parseInt(computer_score.innerText) + 1).toString()+"</p>"
        result.innerHTML = "<p>Computer Won</p>"
        result.style.backgroundColor = "#DF0001"
    }
    else if (your_choice === "rock" && comp_choice === "scissors") {
        your_score.innerHTML = "<p>"+(parseInt(your_score.innerText) + 1).toString()+"</p>"
        result.innerHTML = "<p>You Won</p>"
        result.style.backgroundColor = "#036503"
    }
    else if (your_choice === "paper" && comp_choice === "scissors") {
        computer_score.innerHTML = "<p>"+(parseInt(computer_score.innerText) + 1).toString()+"</p>"
        result.innerHTML = "<p>Computer Won</p>"
        result.style.backgroundColor = "#DF0001"
    }
    else if (your_choice === "paper" && comp_choice === "rock") {
        your_score.innerHTML = "<p>"+(parseInt(your_score.innerText) + 1).toString()+"</p>"
        result.innerHTML = "<p>You Won</p>"
        result.style.backgroundColor = "#036503"
    }
    else if (your_choice === "scissors" && comp_choice === "rock") {
        computer_score.innerHTML = "<p>"+(parseInt(computer_score.innerText) + 1).toString()+"</p>"
        result.innerHTML = "<p>Computer Won</p>"
        result.style.backgroundColor = "#DF0001"
    }
    else if (your_choice === "scissors" && comp_choice === "paper") {
        your_score.innerHTML = "<p>"+(parseInt(your_score.innerText) + 1).toString()+"</p>"
        result.innerHTML = "<p>You Won</p>"
        result.style.backgroundColor = "#036503"
    }
}

rock_btn.onclick = () => {
    compute("rock")
}
paper_btn.onclick = () => {
    compute("paper")
}
scissors_btn.onclick = () => {
    compute("scissors")
}