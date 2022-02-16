const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    onAdd();
})

function onAdd() {
    const text = input.value;

    if (text === '') {
        input.focus();
        return;
    }
    const item = createItem(text);
    console.log('save item', item);
    items.appendChild(item);
    item.scrollIntoView({
        block: 'center'
    });
    input.value = '';
    input.focus();
}

let id = 0; //UUID

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
             <div class="item">
                <span class="item__name">${text}</span>
                <button class="item__delete" >
                    <i class="fas fa-trash-can" data-id=${id}></i>
                </button>
             </div>
             <div class="item__divider"></div>
    `;
    id++;
    return itemRow;
}

// addBtn.addEventListener('click', () => {
//     onAdd();
// })
// input.addEventListener('keydown', (event) => {
//     if (event.isComposing) {
//         return;
//     }
//     if (event.key === 'Enter') {
//         onAdd();
//     }
// })

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
})