var character = document.getElementById("character");
var block = document.getElementById("block");
const game = document.querySelector('.game');
const alert = document.getElementById('alert');
const grid = document.querySelector('.grid');

var counter = 0;
var gameOverMenu;

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

function control (e){
    if(e.keycode === 32){
        jump()
    }
}

gameOverMenu = document.getElementById("gameOver");

function displayMenu(menu) {
    menu.style.visibility = "visible";         
}

function jump(){
    if (character.classList=="animate")
    {
        return
    }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

window.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=>{

        logoSpan.forEach((span, idx) =>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })

        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2700)

    })
})

var startGame = setTimeout(function(){
    var checkDead=setInterval(function(){
        let characterTop=parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    
        if(blockLeft<20 && blockLeft>-20 && characterTop>=130)
        {
            block.style.animation="none";
            alert.innerHTML = "Game Over! Score : " + Math.floor(counter/100);
            displayMenu(gameOverMenu);
            counter = 0;
            block.style.animation="block 1s infinite linear"
            while(grid.firstChild){
                grid.removeChild(grid.lastChild);
            }
        }
        else{
            document.getElementById("ScoreSpan").innerHTML = (Math.floor(counter/100));
            counter++;
        }
    },10);
},3700);

