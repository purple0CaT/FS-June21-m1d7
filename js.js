const header1 = document.querySelector('h1')
const backGround = document.querySelector('section')
const footAdrs = document.querySelector('.info p')
const amazonLink = document.querySelectorAll('.table a')

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
    tabs.style.backgroundColor = 'rgb(230, 251, 255)'}
}