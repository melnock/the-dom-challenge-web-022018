let counter = document.getElementById("counter")
let incrementCounter = ()=>(counter.innerText = parseInt(counter.innerText)+ 1)
let decrementCounter = ()=>(counter.innerText = parseInt(counter.innerText)-1)

  let interval = setInterval(incrementCounter, 1000)

let plusButton = document.getElementById("+")
function increment(e){
  incrementCounter()
}

plusButton.addEventListener('click', increment)


let minusButton = document.getElementById("-")
function decrement(e){
  decrementCounter()
}

minusButton.addEventListener('click', decrement)

let likeButton = document.getElementById("<3")
let likes = document.getElementsByClassName("likes")[0]
let likeCounter = 0
let likeList = []

function likeNumber(){

  if (likeList.includes(counter.innerText)){
    let newLike = document.getElementsByTagName('li')[likeList.length-1]
    ++likeCounter
    newLike.innerText = `${counter.innerText} has been liked ${likeCounter} times.`
  }else{
    let newLike = document.createElement('li')
    likeCounter = 1
    newLike.innerText = `${counter.innerText} has been liked ${likeCounter} times.`
    likes.append(newLike)
    likeList.push(counter.innerText)
  }
}

likeButton.addEventListener('click', likeNumber)

let pauseButton = document.getElementById("pause")

function pauseResume(){
  if (interval){
    clearInterval(interval)
    interval = null
    pauseButton.innerText = "resume"
    plusButton.disabled = true
    minusButton.disabled = true
    likeButton.disabled = true
  }else{
    interval = setInterval(incrementCounter, 1000)
    pauseButton.innerText = "pause"
    plusButton.disabled = false
    minusButton.disabled = false
    likeButton.disabled = false
  }
}

pauseButton.addEventListener('click', pauseResume)

let div = document.getElementsByTagName('div')[0]
let commentZone = document.getElementById('list')

function comments(){
  event.preventDefault();
  event.stopPropagation();
  let newComment = document.createElement('p')
  console.log(event)
  newComment.innerText = event.target.children[0].value
  commentZone.append(newComment)
}

div.addEventListener('submit', comments)
