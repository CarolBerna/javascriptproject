let countEl = document.getElementById("count-el")
let count = 0
function incrementcount() {
    count += 1
countEl.innerText = count ;
}
function save(){
    console.log(count)
}
