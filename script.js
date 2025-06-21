let userScore=document.getElementById("user-score");
let compScore=document.getElementById("comp-score");
let message=document.getElementById("msg");

const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    console.dir(choice);
    choice.addEventListener("click",()=>{
        const userChoiceID=choice.getAttribute("id");
        playGame(userChoiceID);
    })
});

const compChoice=()=>{
    const options=['Rock','Paper','Scissors'];
    const compChoice=Math.floor(Math.random()*3);
    return options[compChoice];
}

const playGame=(userChoice)=>{
    const UserChoice=userChoice;
    const CompChoice=compChoice();
    console.log(`User Choice is ${UserChoice}`);
    console.log(`Computer Choice is ${CompChoice}`);
    if(UserChoice===CompChoice) drawGame();
    else{
        let userWin=true;
        if(UserChoice==='Rock' && CompChoice==='Paper') userWin=false;
        else if(UserChoice==='Paper' && CompChoice==='Scissors') userWin=false;
        else if(UserChoice==='Scissors' && CompChoice==='Rock') userWin=false;
        showWinner(userWin,UserChoice,CompChoice);
    }
}

const drawGame=()=>{
    message.innerText='Oops!!Game Was Draw.Play Again';
    message.style.backgroundColor="#081b31";
}

let user=0;
let comp=0;

const showWinner=(userWin,UserChoice,CompChoice)=>{
    if(userWin){
        message.innerHTML=`<i>You Win🥳🥳.Your ${UserChoice} Beats ${CompChoice}</i>`;
        user+=1;
        userScore.innerText=user;
        message.style.backgroundColor="green";
    }
    else{
        message.innerHTML=`<i>You Lose!${CompChoice} Beats Your ${UserChoice}</i>`;
        comp+=1;
        compScore.innerText=comp;
        message.style.backgroundColor="red";
    }    
};

let reset=document.querySelector("button");

reset.addEventListener("click",()=>{
    user=0;
    comp=0
    userScore.innerText=user;
    compScore.innerText=comp;
    message.innerHTML="<i>Click On The Icons To Get Started</i>";
    message.style.backgroundColor="#081b31";
});