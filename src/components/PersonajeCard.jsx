// destructuring de props
function PersonajeCard({ personaje, esFavorito, onToggleFavorito }) {
  // destructuring del objeto
  const { id, name, house, image, alive } = personaje

  return (
    <li>
      {/* render condicional con ternario */}
      {image ? <img src={image} alt={name} width="100" /> : <p>Sin imagen</p>}

      <h3>{name}</h3>

      {/* render condicional con && */}
      {house && <p>Casa: {house}</p>}

      {/* ternario */}
      <p>{alive ? 'Vivo' : 'Fallecido'}</p>

      {/* evento handler */}
      <button onClick={() => onToggleFavorito(id)}>
        {esFavorito ? 'Quitar favorito' : 'Agregar favorito'}
      </button>
    </li>
  )
}

export default PersonajeCard