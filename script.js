//const listContainer = document.querySelector('[data-lists]')
//console.log(listContainer)

const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [{
    id: 1,
    name: 'html'
}, {
    id:2,
    name: 'js'
}]

newListForm.addEventListener('submit', function(e) {
    e.preventDefault() //grava os dados capturados ao atualizar a página
    const listName = newListInput.value //pega o valor que a pessoa digita
    if (listName === null || listName === '') return
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    render();
})

function render () { //mostra itens na página
    clearElement(listContainer);
        lists.forEach(function(list) {
        const item = document.createElement('li');
        item.classList.add('item');
        item.innerText = list.name;
        listContainer.appendChild(item);
    })
}

function createList(name) {
    return {id: Date.now().toString(), name: name }

}

function clearElement (element) { //função para evitar que os elementos que já foram escritos antes se repitam
    while (element.firstChild) {
        element.removeChild (element.firstChild);
    }       
}

render();