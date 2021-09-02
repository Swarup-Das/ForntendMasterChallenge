const choices =['paper', 'scissors', 'rock'];
const buttons = document.querySelectorAll('.btn-option');
const score1= document.getElementById('score');
const main= document.getElementById('main');
const selection= document.getElementById('selection');
const reset= document.getElementById('reset');
const user_select = document.getElementById('user_select');
const system_select= document.getElementById('system_select');
const winner= document.getElementById('winner');

// modal buttons

const openbtn= document.getElementById('open');
const closebtn= document.getElementById('close');
const modal= document.getElementById('modal');

let userChoice= undefined;
let score =0; 


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice= button.getAttribute('data-choice');
         
        
        checkwinner();
    });
});

reset.addEventListener('click', () =>{
    main.style.display='flex';
    selection.style.display='none';
});

openbtn.addEventListener('click', () =>{
    modal.style.display='flex';
});
closebtn.addEventListener('click', () =>{
    modal.style.display='none';
});



function checkwinner() {
    const systemChoice= pickRandom();


    updateSelection(user_select, userChoice);
    updateSelection(system_select, systemChoice);

    if(userChoice === systemChoice)
    {
        //draw
        winner.innerText= 'Draw';
    }
    else if(
        (userChoice === 'paper' && systemChoice=== 'rock') 
        || 
        (userChoice === 'scissors' && systemChoice === 'paper') 
        || 
        (userChoice === 'rock' && systemChoice ==="scissors"))
        {
            
            updateScore(1);
            winner.innerText= 'You Won';
        }
        else{
            
            updateScore(-1);
            winner.innerText='You Lost';
            
        }

        //show selection && hide main
        main.style.display='none';
        selection.style.display='flex';
}

function updateScore(value) {
    score+=value;

    score1.innerText = score;
}

function pickRandom() {
    return choices [Math.floor(Math.random()*choices.length)];
    
}

function updateSelection(selectionEl, choice)
{
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-scissors');
    selectionEl.classList.remove('btn-rock');

    
    selectionEl.classList.add(`btn-${choice}`);
    const img=selectionEl.querySelector('img');
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;
}