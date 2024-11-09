const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        input.focus();

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';

        deleteButton.addEventListener('click', function () {
            li.remove();
            input.focus();
            input.value = '';
        })
    } else {
        alert('Please enter a favorite chapter');
    }
})