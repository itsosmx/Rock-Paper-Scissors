var ScoreElm = document.getElementById("Score");
var ScoreCount = window.localStorage.getItem("Score")
var GameObj = ["Paper", "Rock", "Scissors"];

if (!ScoreCount) {
    console.log('sad')
    window.localStorage.setItem("Score", 0)
    ScoreElm.innerHTML = 0
} else {
    ScoreElm.innerHTML = ScoreCount
}

Click("Paper")
Click("Rock")
Click("Scissors")


function Click(id) {
    document.getElementById(id).addEventListener("click", () => {
        var Random = Math.floor(Math.random() * GameObj.length);
        document.getElementById("Game").style.display = "none"
        document.querySelector(".winnerScreen").style.display = "flex"

        var client = document.getElementById(GameObj[Random])
        var user = document.getElementById(id)


        // Classes(AIPick, ClientPick)
        if (client.id === user.id) {
            document.getElementById("WinnerTitle").innerHTML = "tie"
            Classes(client, user, null, null)
        } else if (client.id === "Paper" && user.id === "Rock") {
            document.getElementById("WinnerTitle").innerHTML = "You Lose"
            Classes(client, user, "client", "user")
            Score("lose")
        } else if (client.id === "Paper" && user.id === "Scissors") {
            document.getElementById("WinnerTitle").innerHTML = "You Win"
            Score("win")
            Classes(client, user, "user", "client")
        } else if (client.id === "Scissors" && user.id === "Paper") {
            document.getElementById("WinnerTitle").innerHTML = "You Lose"
            Classes(client, user, "client", "user")
            Score("lose")
        } else if (client.id === "Scissors" && user.id === "Rock") {
            document.getElementById("WinnerTitle").innerHTML = "You Win"
            Score("win")
            Classes(client, user, "user", "client")
        } else if (client.id === "Rock" && user.id === "Paper") {
            document.getElementById("WinnerTitle").innerHTML = "You Win"
            Score("win")
            Classes(client, user, "user", "client")
        } else if (client.id === "Rock" && user.id === "Scissors") {
            document.getElementById("WinnerTitle").innerHTML = "You Lose"
            document.getElementById("client")
            Score("lose")
            Classes(client, user, "client", "user")
        }

    })
}

function Score(num) {
    setTimeout(() => {
        if (num === "lose") {
            if (ScoreCount == 0) return
            ScoreCount--
        } else {
            ScoreCount++
        }
        ScoreElm.innerHTML = ScoreCount
        window.localStorage.setItem("Score", ScoreCount)
    }, 2000)

}

async function Classes(clientid, userid, winner, loser) {
    var clientPick = document.querySelector("#client em")
    var UserPick = document.querySelector("#user em")
    document.getElementById("user").classList.add(userid.id.toLowerCase())
    document.getElementById("client").classList.add(clientid.id.toLowerCase())

    if (winner === "user") {
        document.querySelector(`#${loser} em`).setAttribute('id', "clientAnmtion")
        document.querySelector(`#${winner} em`).setAttribute('id', "winner")
    } else if (winner === "client") {
        document.getElementById("client").classList.add(clientid.id.toLowerCase())
        document.querySelector(`#${winner} em`).setAttribute('id', "clientwinner")
    } else {
        document.querySelector(`#client em`).setAttribute('id', "clientAnmtion")
    }


    document.getElementById(winner)
    clientPick.classList.add(`fa-hand-${clientid.id.toLowerCase()}`)
    UserPick.classList.add(`fa-hand-${userid.id.toLowerCase()}`)

}



function Reset() {
    ScoreElm.innerHTML = 0
    window.localStorage.setItem("Score", "0")
}