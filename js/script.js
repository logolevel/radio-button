'use strict'

var showChoiceBtn = document.getElementById('showChoise'),
    inputRadioCollection = document.getElementsByName('radio-group');

console.log(inputRadioCollection);

showChoiceBtn.addEventListener('click', function() {
    for(var i = 0; i < inputRadioCollection.length; i++) {
        if (inputRadioCollection[i].checked) {
            alert(inputRadioCollection[i].value);
            break;
        }
    }
});

