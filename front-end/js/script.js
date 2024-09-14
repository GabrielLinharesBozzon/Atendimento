const fetchTasks = async()=>{
    const res = await fetch('http://localhost/tasks');
    const tasks = await res.json(res);
    return tasks;
};
const createElement=()=>{
const element = document.createElement(tag);
return element;
};
const  createRow=(tasks) => {
    const tr = createElement('tr');
};
console.log(createElement('div'))