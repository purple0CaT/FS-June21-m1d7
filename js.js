const header1 = document.querySelector('h1')
const backGround = document.querySelector('section')
const footAdrs = document.querySelector('.info p')

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