const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')


})

function betButton(){
    alert("You bet " + (document.getElementById('txtName').value) +" "+"on"+" "+(document.getElementById('txtName2').value) +" "+"for"+" "+ (document.getElementById('txtName3').value) );
    document.getElementById('txtName').value = "";
    document.getElementById('txtName2').value = "";
    document.getElementById('txtName3').value = "";
}