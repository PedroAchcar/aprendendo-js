let inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const myLeads = ["www.teste.com", "www.gato.com", "www.formiga.com"]

inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value)
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}