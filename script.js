// const aggBtn = document.getElementById('agregar');

// const notas = JSON.parse(localStorage.getItem('notas'));

// if (notas) {
//     notas.forEach(nota => aggNuevaNota(nota))
// }

// aggBtn.addEventListener('click', () => aggNuevaNota())

// function aggNuevaNota(texto = '') {
//     const nota = document.createElement('div')
//     nota.classList.add('nota')

//     nota.innerHTML = `
//     <div class="herramientas">
//         <button class="editar"><i class="fa fa-pencil" aria-hidden="true"></i></button>
//         <button class="eliminar"><i class="fa fa-trash-alt" aria-hidden="true"></i></button>
//     </div>

//     <div class="main ${texto ? "" : "hidden"}"</div>
//     <textarea class="main ${texto ? "hidden" : ""}"</textarea>
//     `

//     const editarBtn = nota.querySelector('.editar');
//     const eliminarBtn = nota.querySelector('.eliminar');
//     const main = nota.querySelector('.main');
//     const textArea = nota.querySelector('textarea');

//     textArea.value = texto;
//     main.innerHTML = marked(texto);

//     eliminarBtn.addEventListener('click', () => {
//         nota.remove()

//         updateLS()
//     })

//     editarBtn.addEventListener('click', () => {
//         main.classList.toggle('hidden')
//         textArea.classList.toggle('hidden')
//     })

//     textArea.addEventListener('input', (e) => {
//         const { value } = e.target

//         main.innerHTML = marked(value)

//         updateLS()
//     })

//     document.body.appendChild(nota)
// }

// function updateLS() {
//     const textoNotas = document.querySelectorAll('textarea')

//     const notas = []

//     textoNotas.forEach(nota=>notas.push(nota.value))

//     localStorage.setItem('notas',JSON.stringify(notas))
// }

const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        <button class="delete"><i class="fas fa-trash"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove()

        updateLS()
    })

    
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(note)
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}

let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');

themeSwitch.onclick = function () {
    body.classList.toggle('dark')
}