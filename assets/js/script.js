const tareas = []
const listaDeTareas = document.querySelector('#listaTareas')
const tareaInput = document.querySelector('#nuevaTarea')
const btnAgregar = document.querySelector('#agregarTarea')
const resTareas = document.querySelector('#resumenTareas')

btnAgregar.addEventListener('click', () => {
    const nuevaTarea = tareaInput.value
    tareas.push({id: Date.now(), descrip: nuevaTarea, realizada: false})
    tareaInput.value = ''

    html1 = `
    <p>Total de tareas: ${tareas.length}</p>
    <p>Realizadas: </p>`;
    resTareas.innerHTML = html1;

    let html = ''
    for (let tarea of tareas) {
        html += `
        <tr>
            <th scope="row">${tarea.id}</th>
            <td>${tarea.descrip}</td>
        </tr>`;
        listaDeTareas.innerHTML = html;

    }

})



