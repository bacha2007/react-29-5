import { useState, useEffect } from 'react'
import PersonajeCard from './components/PersonajeCard'
import Buscador from './components/Buscador'

function App() {
  // useState — estado de la app
  const [personajes, setPersonajes] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [loading, setLoading] = useState(true)
  const [favoritos, setFavoritos] = useState([])

  // useEffect — fetch a la API al montar
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data)
        setLoading(false)
      })
  }, [])

  // handler — toggle favorito
  function toggleFavorito(id) {
    const yaEsta = favoritos.includes(id)
    if (yaEsta) {
      setFavoritos(favoritos.filter((f) => f !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  // filter — filtrar por búsqueda
  const personajesFiltrados = personajes.filter((p) =>
    p.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  // render condicional — si está cargando
  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <h1>Personajes de Harry Potter</h1>

      <Buscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <p>{personajesFiltrados.length} personajes encontrados</p>

      <ul>
        {/* map — renderizar lista */}
        {personajesFiltrados.map((personaje) => (
          <PersonajeCard
            key={personaje.id}
            personaje={personaje}
            esFavorito={favoritos.includes(personaje.id)}
            onToggleFavorito={toggleFavorito}
          />
        ))}
      </ul>
    </div>
  )
}

export default App