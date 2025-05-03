let boxes = document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-btn');
let turnO = true;
let newGameBtn=document.querySelector('#new-btn');
let msgCont=document.querySelector('.message-cont');
let msg=document.querySelector('#msg');
let count=0;

const winPattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
];
// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         count++;
//         if(count==9 && )
//     })
// })
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
         box.innerText='O';
         turnO=false;
       }
       else{
        box.innerText='X';
         turnO=true;
       }
       box.disabled=true;
       checkWinner();
    });
});
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const  showWineer=(Winner)=>{
    msg.innerText=` Congratulation, Winner is ${Winner}`;
    msgCont.classList.remove('hide');
    disable();
}
const checkWinner =()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWineer(pos1Val);
            }
           
        }
        
    }
};
const resetGame=()=>{
    turnO=true;
    enable();
    msgCont.classList.add('hide');
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
