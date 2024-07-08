const tareas = [
    { 
        id:  Math.floor(Math.random() * 90) + 10,
        descrip: 'Tarea1',
        realizada: false,
    },
    { 
        id:  Math.floor(Math.random() * 90) + 10,
        descrip: 'Tarea2',
        realizada: false,
    },
    { 
        id:  Math.floor(Math.random() * 90) + 10,
        descrip: 'Tarea3',
        realizada: false,
    }

]
const listaDeTareas = document.querySelector('#listaTareas')
const tareaInput = document.querySelector('#nuevaTarea')
const btnAgregar = document.querySelector('#agregarTarea')
const resTareas = document.querySelector('#resumenTareas')

renderTarea()

function renderTarea() {

    let html = ''
    for (let tarea of tareas) {
        html += `
        <tr>
            <td scope="row">${tarea.id}</th>
            <td id="${tarea.id}" style="${tarea.realizada ? 'text-decoration: line-through; color: green': ''}">${tarea.descrip}</td>            
            <th><input onclick="cambiar(this, ${tarea.id})" class="form-check-input" type="checkbox" ${tarea.realizada ? 'checked' : '' } value="" id="defaultCheck1" }></th>
            <th><button onclick="borrar(${tarea.id})" type="button" class="btn btn-outline-danger">Borrar</button></th>
        </tr>`;
    }
    listaDeTareas.innerHTML = html;

    let html1 = `
    <p class="h5">Total de tareas: ${tareas.length}</p>
    <p class="h5">Realizadas: ${tareas.filter(tarea => tarea.realizada == true).length}</p>`;
    resTareas.innerHTML = html1;
} 

function renderResumen() {
    let html1 = `
    <p class="h5">Total de tareas: ${tareas.length}</p>
    <p class="h5"x>Realizadas: ${tareas.filter(tarea => tarea.realizada == true).length}</p>`;
    resTareas.innerHTML = html1;
}

btnAgregar.addEventListener('click', () => {
    const nuevaTarea = tareaInput.value
    tareas.push({id: Math.floor(Math.random() * 90) + 10, descrip: nuevaTarea, realizada: false})
    tareaInput.value = '';  
    renderTarea()

})

function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderTarea()
    renderResumen()
}

function cambiar(checkbox, id) {
    const esClickeado = checkbox.checked;
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas[index].realizada = esClickeado ? true : false;
    parrafo = String(id)
    const tareaRealizada = document.getElementById(parrafo)
    if (esClickeado) {
        tareaRealizada.style.textDecoration = 'line-through';
        tareaRealizada.style.color = 'green';
    }
    else {
        tareaRealizada.style.textDecoration = 'none';
        tareaRealizada.style.color = 'black';
    }
    renderResumen()
}


