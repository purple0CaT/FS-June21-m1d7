const header1 = document.querySelector('h1')
const backGround = document.querySelector('section')
const footAdrs = document.querySelector('.info p')
const amazonLink = document.querySelectorAll('.table a')
const imgLink= document.querySelectorAll('a img')
const price= document.querySelectorAll('a span')

const colors = ['#ff5959', '#ffc259', '#59ffba', 'yellow', 'cyan', '#ff5983', '#e659ff', 'rgb(187, 0, 0)']

// H1 function changer
function changeText(){
    header1.style.color = "Gray"
}
//  BackGround color changer
function changeBackCol(){
    backGround.style.backgroundColor = "#fff"
}
// Footer Address
function footerAddress(){
footAdrs.innerText = "Wales, Mountain Street"
}

// Add CSS class to Amazon link

function addCssCls () {
for ( let tabs of amazonLink){
    tabs.classList.toggle("linkClass")}
}

// Visibility for IMG

function visImg() {
    for ( let img of imgLink){
        img.classList.toggle("visibImg")}
}

// Color Products


function priceClr(){

    for ( let spanC of price){
        
        let ind = Math.floor(Math.random() * colors.length)
            
            priceCol = colors[ind]
            console.log(priceCol)
            
        spanC.style.color=`${priceCol}`
}
}
