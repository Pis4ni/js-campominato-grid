// recuper dal dom gli elementi di interesse
const cellsContainer = document.getElementById('cells-container')
const startBtn = document.getElementById('generate-grid')
// todo totale celle temporaneo da legare alla select futura
const cellsTotal = 8*8
// ! ON LOAD

generateGrid(cellsTotal, cellsContainer)



// ! STARTBUTTON CLICK
startBtn.addEventListener('click', () =>{
    cellsContainer.innerHTML = ''

    for (let i = 1; i <= cellsTotal; i++) {
        generateCell(cellsContainer, i);
    }
})

// ! FUNCTIONS

function generateCell(container, i){
    // creo l'elemento cella
    const cell = document.createElement('li')
    // todo da mettere il valore della cella non in innerHTML
    cell.setAttribute('data-index', i)
    cell.classList.add('cell')

    cell.addEventListener('click', function(){
        const index =this.getAttribute('data-index');
        this.innerText = index;
        if (this.classList.contains('cell-odd') || this.classList.contains('cell-even')) {
            this.classList.remove('cell-odd') 
            this.classList.remove('cell-even') 
            this.innerText = '';
        }else if (index % 2 == 0 ) {
            this.classList.add('cell-odd')
        }else if (index % 2 !== 0 ) {
            this.classList.add('cell-even')}
    })

    cellsContainer.append(cell)
    
}
function generateGrid(cellsNumber, container){
    cellsContainer.innerHTML = ''
    for (let i = 1; i <= cellsNumber; i++) {
        generateCell(container, i);
    }
}