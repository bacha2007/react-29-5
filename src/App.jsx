import { useState, useEffect } from 'react'
import ClubCard from './components/ClubCard'
import Buscador from './components/Buscador'

function App() {
  // useState — guardamos los clubes que vienen de la API
  const [clubes, setClubes] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [loading, setLoading] = useState(true)
  const [favoritos, setFavoritos] = useState([])

  // useEffect — cuando se monta el componente, pedimos los datos
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League')
      .then((res) => res.json())
      .then((data) => {
        setClubes(data.teams)
        setLoading(false)
      })
  }, [])

  // handler — agregar o quitar de favoritos
  function toggleFavorito(id) {
    const yaEsta = favoritos.includes(id)
    if (yaEsta) {
      setFavoritos(favoritos.filter((f) => f !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  // filter — filtramos los clubes según lo que escribe el usuario
  const clubesFiltrados = clubes.filter((club) =>
    club.strTeam.toLowerCase().includes(busqueda.toLowerCase())
  )

  // render condicional — si está cargando mostramos un mensaje
  if (loading) return <p>Cargando clubes...</p>

  return (
    <div>
      <h1>Clubes de la Premier League</h1>

      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />

      <p>{clubesFiltrados.length} clubes encontrados</p>

      <ul>
        {/* map — recorremos el array y mostramos cada club */}
        {clubesFiltrados.map((club) => (
          <ClubCard
            key={club.idTeam}
            club={club}
            esFavorito={favoritos.includes(club.idTeam)}
            onToggleFavorito={toggleFavorito}
          />
        ))}
      </ul>
    </div>
  )
}

export default App