import grid from './grid.js';


const number = {
    numbers: [],
    getElements: function() {
        const numberElements = document.getElementsByClassName("number");

        for (let numberElement of numberElements) {
            this.numbers.push(numberElement);
        }
    },
    spawn: function () {
        const emptyCellIndex = grid.randomEmptyCellIndex();

        if (emptyCellIndex === false) {
            return false;
        }

        const numberElement = document.createElement("div");
        let newNumberValue = Math.pow(2, (Math.floor(Math.random() * 2) + 1));
        if (newNumberValue == 2)numberElement.style.backgroundColor = '#eee4da'
      else if(newNumberValue  == 4)numberElement.style.backgroundColor = '#ede0c8' 
        

        numberElement.innerText = newNumberValue;
        numberElement.dataset.value = newNumberValue;
        numberElement.classList.add("number");

        numberElement.style.top = `${grid.cells[emptyCellIndex].top}px`;
        numberElement.style.left = `${grid.cells[emptyCellIndex].left}px`;

        grid.cells[emptyCellIndex].number = numberElement;

        grid.gridElement.append(numberElement);

        return true;
    } ,
    moveTo: function(fromCell, toCell) {
        const number = fromCell.number;

        if(toCell.number === null) {
            // target cell is empty fill with number
            number.style.top = `${toCell.top}px`;
            number.style.left = `${toCell.left}px`;
            
            toCell.number = number;
            fromCell.number = null;
        } else if (number.dataset.value === toCell.number.dataset.value) {
            // target cell has same number
            // merge both cell

            number.style.top = `${toCell.top}px`;
            number.style.left = `${toCell.left}px`;
            number.style.opacity = '0';

            // remove number DOM element after transition
            setTimeout(() => {
                grid.gridElement.removeChild(number);
            }, 500);

            // double target cell's number
            const newNumberValue = toCell.number.dataset.value * 2;
            const score = document.getElementsByClassName("score")[0];
            score.innerHTML = parseInt(score.innerHTML) + parseInt(newNumberValue);
            if (score.innerHTML == 2048)
            {
                document.getElementsByClassName("result")[0].innerHTML="You Won!Now enjoy infinite mode."
                }
            toCell.number.dataset.value = newNumberValue;
            toCell.number.innerText = newNumberValue;
            if (newNumberValue == 0) toCell.number.style.backgroundColor = '#afa192'
      else if (newNumberValue == 2)  toCell.number.style.backgroundColor = '#eee4da'
      else if (newNumberValue  == 4) toCell.number.style.backgroundColor = '#ede0c8' 
      else if (newNumberValue  == 8) toCell.number.style.backgroundColor = '#f2b179' 
      else if (newNumberValue  == 16)toCell.number.style.backgroundColor = '#ffcea4' 
      else if (newNumberValue  == 32)toCell.number.style.backgroundColor = '#e8c064' 
      else if (newNumberValue == 64) toCell.number.style.backgroundColor = '#ffab6e' 
      else if (newNumberValue == 128)toCell.number.style.backgroundColor = '#fd9982' 
      else if (newNumberValue == 256)toCell.number.style.backgroundColor = '#ead79c' 
      else if (newNumberValue == 512)toCell.number.style.backgroundColor = '#76daff' 
      else if(newNumberValue == 1024)toCell.number.style.backgroundColor = '#beeaa5' 
      else if(newNumberValue == 2048)toCell.number.style.backgroundColor = '#d7d4f0'
      else if(newNumberValue == 4096)toCell.number.style.backgroundColor = '#000033'
            fromCell.number = null;
        }
    }
}

export default number;