
const createBtn = document.querySelector('#create');

const tasksEl = document.querySelector('#tasks');

let counter = 0;

createBtn.addEventListener('click', e => {
	counter += 1

	let div = document.createElement('div')

	div.className = 'task'

	div.id = `task-${counter}`

	div.innerHTML = `
		<input class="enter" type="text" />
		<button class="delete" onclick="deleteTask('task-${counter}')"></button>
	`

	tasksEl.append(div);
});

const deleteTask = id => {
	const el = document.querySelector(`#${id}`);
	el.remove();
}


const sortBtn = document.querySelector('#buttonSort');

sortBtn.addEventListener('click', e => {
	let list, i, switching, b, shouldSwitch, dir, switchcount = 0;

	list = document.querySelector('#tasks');
	switching = true;
	dir = 'asc';
	sortBtn.classList.toggle('rotate');

	while (switching) {
		switching = false;
		b = list.querySelectorAll('.task > .enter');
		f = list.querySelectorAll('.task');

		for (i = 0; i < b.length - 1; i++) {
			shouldSwitch = false;
			if (dir == 'asc') {
				if (b[i].value.toLowerCase() > b[i + 1].value.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			} else if (dir == 'desc') {
				if (b[i].value.toLowerCase() < b[i + 1].value.toLowerCase()) {
					shouldSwitch = true;
					break;
				}
			}
		}

		if (shouldSwitch) {
			f[i].parentNode.insertBefore(f[i + 1], f[i]);
			switching = true;
			switchcount++;
		} else {
			if (switchcount == 0 && dir == 'asc') {
				dir = 'desc';
				switching = true;
			}
		}
	}
})
