
let intervalID = setInterval(increaseTimer, 1000);
const pause = document.getElementById('pause');
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const comment = document.getElementById('coment-input')
const heart = document.getElementById('heart')
const submit = document.getElementById('submit')
function increaseTimer () {
    const n = document.getElementById('counter')
    n.innerText = parseInt(n.innerText) + 1
}
function decreaseTimer () {
    const n = document.getElementById('counter')
    n.innerText = parseInt(n.innerText) - 1
}
function stopTimer(){
  clearInterval(intervalID)
  pause.innerText = "resume" ;
}
function resumeTimer(){
  intervalID = setInterval(increaseTimer, 1000);
  pause.innerText = "pause";
} 
function stopOrResume () {
 
  if (pause.innerText === "pause" ){
  stopTimer()
  }
  else {
  resumeTimer()
    
  }
}
function addLike () {
    const counter = document.getElementById('counter')
    let li = document.createElement('li')
    li.innerHTML = `${counter.innerText} was liked.`  
    let ul = document.querySelector('ul') 
    ul.appendChild(li)
}
function addComment(){
  
  let form = document.getElementById('comment-form')
}


document.addEventListener("DOMContentLoaded", function(){
  pause.addEventListener('click', stopOrResume)
  minus.addEventListener('click', decreaseTimer)
  heart.addEventListener('click', addLike)
  plus.addEventListener('click', increaseTimer)
  submit.addEventListener('click', addComment)
})