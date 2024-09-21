const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-task');

// Função para buscar tarefas
const fetchTasks = async () => {
  const response = await fetch('http://localhost:80/tasks');
  const tasks = await response.json();
  return tasks;
}

// Função para adicionar uma tarefa
const addTask = async (event) => {
  event.preventDefault();

  const task = { task: inputTask.value };

  await fetch('http://localhost:80/tasks', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });

  loadTasks();
  inputTask.value = '';
}

// Função para deletar uma tarefa
const deleteTask = async (id) => {
  await fetch(`http://localhost:80/tasks/${id}`, {
    method: 'delete',
  });

  loadTasks();
}

// Função para atualizar uma tarefa
const updateTask = async ({ id, task, status }) => {
  // Verifique o que está sendo enviado para o servidor
  console.log({ id, task, status });

  await fetch(`http://localhost:80/tasks/${id}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task, status }), // Certifique-se que está enviando um objeto com os campos corretos
  });

  loadTasks();
}

// Função para formatar a data
const formatDate = (dateUTC) => {
  const options = { dateStyle: 'long', timeStyle: 'short' };
  const date = new Date(dateUTC).toLocaleString('pt-br', options);
  return date;
}

// Função auxiliar para criar um elemento HTML
const createElement = (tag, innerText = '', innerHTML = '') => {
  const element = document.createElement(tag);

  if (innerText) {
    element.innerText = innerText;
  }

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  return element;
}

// Função para criar o select de status
const createSelect = (value) => {
  const options = `
    <option value="0">pendente</option>
    <option value="1">em andamento</option>
    <option value="2">concluída</option>
  `;

  const select = createElement('select', '', options);
  select.value = value;

  return select;
}

// Função para criar um botão de ação (editar/deletar)
const createActionButton = (icon, onClick) => {
  const button = createElement('button', '', `<span class="material-symbols-outlined">${icon}</span>`);
  button.classList.add('btn-action');
  button.addEventListener('click', onClick);
  return button;
}

// Função para criar o formulário de edição
const createEditForm = (task, tdTitle) => {
  const editForm = createElement('form');
  const editInput = createElement('input');
  editInput.value = task.task;
  editForm.appendChild(editInput);

  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    updateTask({ id: task.id, task: editInput.value, status: task.status });
  });

  return editForm;
}

// Função para criar uma linha da tabela
const createRow = (task) => {
  const { id, task: title, created_at, status } = task;

  const tr = createElement('tr');
  const tdTitle = createElement('td', title);
  const tdCreatedAt = createElement('td', formatDate(created_at));
  const tdStatus = createElement('td');
  const tdActions = createElement('td');

  const select = createSelect(status);
  // Converte o status para número antes de enviar para updateTask
  select.addEventListener('change', ({ target }) => updateTask({ ...task, status: Number(target.value) }));
  tdStatus.appendChild(select);

  const editButton = createActionButton('edit', () => {
    tdTitle.innerText = '';
    tdTitle.appendChild(createEditForm(task, tdTitle));
  });

  const deleteButton = createActionButton('delete', () => deleteTask(id));

  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  tr.appendChild(tdTitle);
  tr.appendChild(tdCreatedAt);
  tr.appendChild(tdStatus);
  tr.appendChild(tdActions);

  return tr;
}

// Função para carregar as tarefas
const loadTasks = async () => {
  const tasks = await fetchTasks();
  tbody.innerHTML = '';
  tasks.forEach((task) => {
    const tr = createRow(task);
    tbody.appendChild(tr);
  });
}

// Adiciona evento de submit no formulário de adicionar tarefa
addForm.addEventListener('submit', addTask);
loadTasks();
