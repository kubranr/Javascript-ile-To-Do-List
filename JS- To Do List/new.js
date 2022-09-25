//Close button ekleme

let liDOM = document.getElementsByTagName("li")

for (let i = 0; i < liDOM.length; i++ ) {
    let closeButton = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    closeButton.className = "close"
    closeButton.appendChild(txt)
    liDOM[i].appendChild(closeButton)
    liDOM[i].onclick = check
    

    for (i =0; i < close.length; i++ ) {
        close[i].onclick = function() {
            let div = this.parentElement
            div.style.display= "none"
        }
    }

}


liDOM.onclick = check
function check() {
    this.classList.toggle("checked")
}


// Close butona tıklayınca listeden silme
let close = document.getElementsByClassName("close")

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement
        div.style.display = "none"
    }
}


// Listeye yeni eleman ekleme
function newElement() {
    let li = document.createElement("li")
    let inputValue = document.getElementById("task").value
    let t = document.createTextNode(inputValue)
    li.appendChild(t)
    if (inputValue === '') {
        $(".error").toast("show")   
    } else {
        $(".success").toast("show")
        document.getElementById("list").appendChild(li)
    }
    document.getElementById("task").value = ""

    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    for (i = 0; i < close.length; i++ ) {
        close[i].onclick = function() {
            let div = this.parentElement
            div.style.display= "none"
        }
    }

}

