
let nameArr = [];
const selectedButtons = document.querySelectorAll('.btn');
    for(const button of selectedButtons){
        button.addEventListener('click', function(){
           
            let playerName = button.parentNode.parentNode.childNodes[1].innerText;
         
            nameArr.push(playerName);
            if(nameArr.length >= 6){
                alert('Dont add more than Five players')
            }
            else{
                const playerList = document.getElementById('players-list');
                const li = document.createElement('li');
                li.innerText = playerName;
                playerList.appendChild(li);
                button.setAttribute('disabled', true) ;
            }
        });        
    };


    document.getElementById('cal-btn').addEventListener('click', function(){
        document.getElementById('')


    });

    


   




