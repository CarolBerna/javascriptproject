let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function incrementcount() {
    count += 1
countEl.innerText = count ;
}
function save(){

let sd = count + " - "
saveEl.textContent += sd
countEl.textContent = 0
count = 0
}
