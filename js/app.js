// recuper dal dom gli elementi di interesse
const cellsContainer = document.getElementById('cells-container')
const startBtn = document.getElementById('generate-grid')
const difficulty = document.getElementById('difficulty')
let difficultyValue = difficulty.value
console.log(difficultyValue);
// todo totale celle temporaneo da legare alla select futura
let cellsTotal = difficultyValue * difficultyValue;
console.log(cellsTotal);
// ! ON LOAD

generateGrid(cellsTotal, cellsContainer, difficultyValue)
console.log(cellsTotal);



// ! STARTBUTTON CLICK
startBtn.addEventListener('click', () =>{
    cellsContainer.innerHTML = ''
    difficultyValue = difficulty.value
    cellsTotal = difficultyValue * difficultyValue
    for (let i = 1; i <= cellsTotal; i++) {
        generateCell(cellsContainer, i, difficultyValue);
    }
    console.log(cellsTotal);
})

// ! FUNCTIONS

function generateCell(container, i, difficulty){
    // creo l'elemento cella
    const cell = document.createElement('li')
    if (difficulty == 10) {
        cell.classList.remove('w-medium')
        cell.classList.remove('w-hard')
        cell.classList.add('w-easy')
    }else if (difficulty == 9) {
        cell.classList.remove('w-easy')
        cell.classList.remove('w-hard')
        cell.classList.add('w-medium') 
    }else if (difficulty == 7) {
        cell.classList.remove('w-easy')
        cell.classList.remove('w-medium')
        cell.classList.add('w-hard') 
    }
    cell.setAttribute('data-index', i)
    cell.classList.add('cell')

    cell.addEventListener('click', function(){
        const index =this.getAttribute('data-index');
        this.innerText = index;
        if (this.classList.contains('cell-odd') || this.classList.contains('cell-even')) {
            this.classList.remove('cell-odd') 
            this.classList.remove('cell-even') 
            this.innerText = '';
        }else if (index % 2 !== 0 ) {
            this.classList.add('cell-odd')
        }else if (index % 2 == 0 ) {
            this.classList.add('cell-even')}
    })

    cellsContainer.append(cell)
    
}
function generateGrid(cellsNumber, container, difficulty){
    cellsContainer.innerHTML = ''
    for (let i = 1; i <= cellsNumber; i++) {
        generateCell(container, i, difficulty);
    }
}