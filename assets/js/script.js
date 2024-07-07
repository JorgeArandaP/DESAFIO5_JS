const tareas = [
    { 
        id: 1212,
        descrip: 'Tarea1',
        realizada: false,
    },
    { 
        id: 1213,
        descrip: 'Tarea2',
        realizada: false,
    },
    { 
        id: 1214,
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
            <th scope="row">${tarea.id}</th>
            <td id="${tarea.id}">${tarea.descrip}</td>
            <th><input onclick="cambiar(this, ${tarea.id})" class="form-check-input" type="checkbox" value="" id="defaultCheck1"></th>
            <th><button onclick="borrar(${tarea.id})" type="button" class="btn btn-outline-danger">Borrar</button></th>
        </tr>`;
    }
    listaDeTareas.innerHTML = html;

    let html1 = `
    <p>Total de tareas: ${tareas.length}</p>
    <p>Realizadas: ${tareas.filter(tarea => tarea.realizada == true).length}</p>`;
    resTareas.innerHTML = html1;
} 

function renderResumen() {
    let html1 = `
    <p>Total de tareas: ${tareas.length}</p>
    <p>Realizadas: ${tareas.filter(tarea => tarea.realizada == true).length}</p>`;
    resTareas.innerHTML = html1;
}

btnAgregar.addEventListener('click', () => {
    const nuevaTarea = tareaInput.value
    tareas.push({id: Date.now(), descrip: nuevaTarea, realizada: false})
    tareaInput.value = '';  
    renderTarea()

})

function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderTarea()
}

function cambiar(checkbox, id) {
    const esClickeado = checkbox.checked;
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas[index].realizada = esClickeado ? true : false;
    parrafo = String(id)
    const tareaRealizada = document.getElementById(parrafo)
    if (esClickeado) {
        tareaRealizada.style.textDecoration = 'line-through';
    }
    else {
        tareaRealizada.style.textDecoration = 'none';
    }
    renderResumen()
}


