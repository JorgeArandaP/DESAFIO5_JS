const tareas = []
const listaDeTareas = document.querySelector('#listaTareas')
const tareaInput = document.querySelector('#nuevaTarea')
const btnAgregar = document.querySelector('#agregarTarea')
const resTareas = document.querySelector('#resumenTareas')

function renderTarea() {

    let html = ''
    for (let tarea of tareas) {
        html += `
        <tr>
            <th scope="row">${tarea.id}</th>
            <td>${tarea.descrip}</td>
            <th><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></th>
            <th><button onclick="borrar(${tarea.id})" type="button" class="btn btn-outline-danger">Borrar</button></th>
        </tr>`;
    }
    listaDeTareas.innerHTML = html;
    let html1 = `
    <p>Total de tareas: ${tareas.length}</p>
    <p>Realizadas: </p>`;
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



