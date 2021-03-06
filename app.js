const addTodo = document.querySelector('.addTodo');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input')

// helper function to generate li html
const generate = (todoNew) =>{
  const html = `
  <li class="todo card-panel #1de9b6 teal accent-4 flex">
    <span class="grey-text text-darken-4">${todoNew}</span>
    <i class="delete fas fa-times"></i>
  </li>
  `;

  console.log('ran');
  todos.innerHTML += html;
}

//event adding TODO list item
addTodo.addEventListener('submit', e => {
  e.preventDefault();

  const todoNew = addTodo.text.value.trim();

  if(todoNew.length){
    generate(todoNew);
    addTodo.reset()
  }
});

// remove LI
todos.addEventListener('click', e => {
  // two options to target the delete icon
  // if(e.target.tagName === 'I'){
  //   e.target.parentElement.remove();
  // };

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

// helper function for the search
const filter = (text) => {
  Array.from(todos.children)
    .filter(itemOfTheArray => !itemOfTheArray.innerText.toLowerCase().includes(text))
    .forEach(itemOfTheForEach => itemOfTheForEach.classList.add('removed'));

  Array.from(todos.children)
    .filter(itemOfTheArray => itemOfTheArray.innerText.toLowerCase().includes(text))
    .forEach(itemOfTheForEach => itemOfTheForEach.classList.remove('removed'));
}

// search for TODOs
search.addEventListener('keyup', () => {
  const text = search.value;
  filter(text);
});


