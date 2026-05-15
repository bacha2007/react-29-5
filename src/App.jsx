import { useState } from 'react'

function App() {

  const [tareas, setTareas] = useState([])
  const [texto, setTexto] = useState('')

  function agregarTarea() {

    if (texto === '') return

    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
    }

    setTareas([...tareas, nuevaTarea])

    setTexto('')
  }

  function eliminarTarea(id) {

    const nuevasTareas = tareas.filter(
      (tarea) => tarea.id !== id
    )

    setTareas(nuevasTareas)
  }

  function editarTarea(id) {

    const nuevoTexto = prompt('Editar tarea')

    const nuevasTareas = tareas.map((tarea) => {

      if (tarea.id === id) {

        return {
          ...tarea,
          texto: nuevoTexto,
        }
      }

      return tarea
    })

    setTareas(nuevasTareas)
  }

  return (

    <div>

      <h1>Lista de tareas</h1>

      <input
        type="text"
        placeholder="Escribí una tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button onClick={agregarTarea}>
        Agregar
      </button>

      <ul>

        {tareas.map((tarea) => (

          <li key={tarea.id}>

            {tarea.texto}

            <button onClick={() => editarTarea(tarea.id)}>
              Editar
            </button>

            <button onClick={() => eliminarTarea(tarea.id)}>
              Eliminar
            </button>

          </li>

        ))}

      </ul>

    </div>

  )
}

export default App