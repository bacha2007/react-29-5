import { useState, useEffect } from 'react'
import ClubCard from '../components/ClubCard'
import Buscador from '../components/Buscador'

const API_KEY = '3d39a9244f25fa3d506d43b1ecb95325'

function Inicio() {
  const [clubes, setClubes] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [loading, setLoading] = useState(true)
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetch('https://v3.football.api-sports.io/teams?league=128&season=2024', {
      headers: {
        'x-apisports-key': API_KEY
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setClubes(data.response)
        setLoading(false)
      })
  }, [])

  function toggleFavorito(id) {
    const idNum = Number(id)
    const yaEsta = favoritos.includes(idNum)
    if (yaEsta) {
      setFavoritos(favoritos.filter((f) => f !== idNum))
    } else {
      setFavoritos([...favoritos, idNum])
    }
  }

  const clubesFavoritos = clubes.filter((item) =>
    favoritos.includes(Number(item.team.id))
  )

  const clubesFiltrados = clubes.filter((item) =>
    item.team.name.toLowerCase().includes(busqueda.toLowerCase()) &&
    !favoritos.includes(Number(item.team.id))
  )

  if (loading) return <p>Cargando clubes...</p>

  return (
    <div>
      <h1>Primera División Argentina</h1>

      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />

      {clubesFavoritos.length > 0 && (
        <div>
          <h2>Favoritos</h2>
          <ul>
            {clubesFavoritos.map((item) => (
              <ClubCard
                key={item.team.id}
                club={item.team}
                esFavorito={true}
                onToggleFavorito={toggleFavorito}
              />
            ))}
          </ul>
        </div>
      )}

      <h2>Todos los clubes</h2>
      <ul>
        {clubesFiltrados.map((item) => (
          <ClubCard
            key={item.team.id}
            club={item.team}
            esFavorito={false}
            onToggleFavorito={toggleFavorito}
          />
        ))}
      </ul>
    </div>
  )
}

export default Inicio