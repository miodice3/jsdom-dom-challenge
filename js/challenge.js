let counterNumber = parseInt(document.getElementById("counter").innerHTML)
let state = "live"
let hash = {}
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const pauseButton = document.getElementById("pause")
const heartButton = document.getElementById("heart")
let likesList = document.querySelector('.likes')
let commentBox = document.getElementById('list')

const commentForm = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')

plusButton.addEventListener('click', plusOne)
minusButton.addEventListener('click', minusOne)
pauseButton.addEventListener('click', stop)
heartButton.addEventListener('click', hearts)
commentForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let todo = commentInput.value
    commentBox.innerHTML += `<li>${todo}</li>`
    commentInput.value = ""
}

function stop(){
    if (state === "live"){
            console.log('changed state to paused')
            state = "paused"
            pauseButton.innerHTML = "Click to Resume"
            plusButton.disabled = "disabled"
            minusButton.disabled = "disabled"
            heartButton.disabled = "disabled"
        } else if (state === "paused" ) {
            console.log('changed state to live')
            state = "live"
            pauseButton.innerHTML = "Pause"
            plusButton.disabled = ""
            minusButton.disabled = ""
            heartButton.disabled = ""
        }
}
function plusOne(){
    counterNumber += 1
    document.getElementById("counter").innerHTML = counterNumber
}
function minusOne(){
    counterNumber -= 1
    document.getElementById("counter").innerHTML = counterNumber
}
function counter(){
    if (state === "live") {
    counterNumber = parseInt(counterNumber, 10) + 1
    document.getElementById('counter').innerText = counterNumber
    }
}
function hearts(){
    if ( hash[counterNumber] ) {
        let temp = hash[counterNumber]
        hash[counterNumber] = temp + 1
    } else {
        hash[counterNumber] = 1
    }
    likesList.innerHTML = ""
    let hashLength = Object.keys(hash).length
    for(let i = 0; i < hashLength; i++) {
        if (hash[Object.keys(hash)[i]] == 1) {
            likesList.innerHTML += `<li>${Object.keys(hash)[i]} has been liked ${hash[Object.keys(hash)[i]]} time</li> `
        } else {
            likesList.innerHTML += `<li>${Object.keys(hash)[i]} has been liked ${hash[Object.keys(hash)[i]]} times</li> `
        }
    };
}
setInterval(counter, 1000);

