
var car = document.querySelectorAll(".car div")
var divcar = document.getElementById("divcar")
var btn1 = document.getElementById("showprice")
var allprice = document.getElementById("allprice")
var totalprice = 0 

car.forEach(function (item) {
    item.onclick = function (){
        totalprice += +(item.getAttribute("price"))
        divcar.innerHTML += item.textContent + "  "

        if (divcar.innerHTML != ""){
            btn1.style.display = "block"
            btn1.style.width= "150px"
            btn1.style.height= "50px"
            btn1.style.color= "blue"
            btn1.style.margin = "auto"
            btn1.style.marginTop = "50px"
        }
    }
})

btn1.onclick = function () {
    allprice.innerHTML = (totalprice + "$")
}


