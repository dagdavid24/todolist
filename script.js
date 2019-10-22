let input = document.getElementById('input-task');
let add = document.querySelector('button');
let tasksRemaining = document.querySelector('.tasks-remaining');
tasksRemaining.textContent = 0;

const addItem = () => {
  console.log(input.value);
  if (input.value) {
    let ul = document.querySelector('.tasks');
    let li = document.createElement('li');
    li.textContent = input.value;
    li.className = 'listedItem';
    ul.appendChild(li);
    input.value = '';

    // increment the task remaining
    tasksRemaining.textContent++;

    //strikethrough
    const strikeThrough = () => {
      li.classList.toggle('done');
      //   if (li.classList === 'done') {
      //     tasksRemaining.textContent--;
      //   }
    };
    li.addEventListener('click', strikeThrough);
  }
};

const enterToAdd = event => {
  if (input.value && event.keyCode === 13) {
    addItem();
  }
};

add.addEventListener('click', addItem);
input.addEventListener('keypress', enterToAdd);
