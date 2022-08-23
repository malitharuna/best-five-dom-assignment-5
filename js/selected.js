// function selectedFivePlayers(element){
//     console.log(element.document.parentNode.parentNode.childNode[0].innerText)
// }

const buttons = document.querySelectorAll('.btn');
// console.log(buttons)
    for(const button of buttons){
        button.addEventListener('click', function(){
            let playerName = button.parentNode.parentNode.childNodes[1].innerText;
            // console.log(playerName);
            const selectFiveDivv = document.getElementById('select-five-divv');
            const ol = document.createElement('ol');
            selectFiveDivv.appendChild(ol);

            const playerList = document.getElementById('players-list');
            const li = document.createElement('li');
            li.innerText = playerName;
            const list = playerList.appendChild(li);
        })
        
        // const getClicked = button.parentNode.parentNode.childNodes[0].innerText;   
    }
   




