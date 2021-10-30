let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function incrementar() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = countEl.textContent + ' -  '
    saveEl.textContent = saveEl.textContent + countStr
    count = 0
    countEl.textContent = 0
}