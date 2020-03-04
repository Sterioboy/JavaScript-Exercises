const addItem = document.querySelector('#addItem');
const addUsername = document.querySelector('#username');

const itemsUl = document.querySelector('#items');
const heading = document.querySelector('h1')
const container = document.querySelector('section')

addItem.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        if (!this.value) return;
        data = this.value;
        const newLi = document.createElement('li');
        newLi.innerText = data;
        itemsUl.append(newLi);
        this.value = ''
    }
})

addUsername.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        if (!this.value) return;
        data1 = this.value;
        const newP = document.createElement('p');
        newP.innerText = `Made by: ${data1}`;
        container.append(newP);
        this.value = ''
    }
})