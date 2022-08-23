
let nameArr = [];
const selectedButtons = document.querySelectorAll('.btn');
    for(const button of selectedButtons){
        button.addEventListener('click', function(){
           
            let playerName = button.parentNode.parentNode.childNodes[1].innerText;
         
            if(nameArr.length >= 5){
                alert('Dont add more than Five players')
            }
            else{
                const playerList = document.getElementById('players-list');
                const li = document.createElement('li');
                li.innerText = playerName;

                nameArr.push(playerName);

                playerList.appendChild(li);
                button.setAttribute('disabled', true) ;
            }   
        });          
    };

        // ------------- Calculation Part start from here ------

    document.getElementById('cal-btn').addEventListener('click', function(){
        const perPlayerFieldElement = document.getElementById('per-player-element');
        const fieldElementString = perPlayerFieldElement.value ;
        const fieldElementNumber = parseFloat(fieldElementString);

        const totalElement = fieldElementNumber * nameArr.length;
          
        const playerExpense =  document.getElementById('player-expense');
        // console.log(playerExpense);
        playerExpense.innerText = totalElement;

        
    });
    
    // ----------Common function used---------- 
    function getFieldElement(elementId){
        const otherExpenseField = document.getElementById(elementId);
        const otherExpenseString = otherExpenseField.value ;
        const otherExpenseValue = parseFloat(otherExpenseString);

        // const coachExpenseField = document.getElementById(elementId);
        // const coachExpenseString = coachExpenseField.value ;
        // const coachExpenseValue = parseFloat(coachExpenseString);

        return otherExpenseValue;
    };

    document.getElementById('total-cal-btn').addEventListener('click', function(){
        const playerExpense = document.getElementById('player-expense');
        const playerExpenseString = playerExpense.innerText;
        const playerExpenseNumber = parseFloat(playerExpenseString);
        
        const managerExpense = getFieldElement('manager-expense');
        const coachExpense = getFieldElement('coach-expense');

        const totalExpenses = playerExpenseNumber + managerExpense + coachExpense;
        const totalExpensesNumber = parseFloat(totalExpenses);

        const totalElement = document.getElementById('total');
        totalElement.innerText = totalExpensesNumber;   
    });
     // ----------Calculation Part ends here ------

    


   




