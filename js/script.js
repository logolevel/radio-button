'use strict'

var showChoiceBtn = document.getElementById('showChoise'),
    inputRadioCollection = document.getElementsByName('radio-group'),
    tempChoiceOutput = document.getElementById('show-temp-choice');


/* Temp choice */

function tempChoice() {
    for (var i = 0; i < inputRadioCollection.length; i++) {
        inputRadioCollection[i].addEventListener('change', function(){
            tempChoiceOutput.innerHTML = `You want to choose: <b>${this.value}</b>`;
        });
    }
}

tempChoice()

/* Show choice */

showChoiceBtn.addEventListener('click', function() {
    for(var i = 0; i < inputRadioCollection.length; i++) {
        if (inputRadioCollection[i].checked) {
            alert(inputRadioCollection[i].value);
            break;
        }
    }
});

