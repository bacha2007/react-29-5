function ClubCard({ club, esFavorito, onToggleFavorito }) {
  const { id, name, logo } = club

  return (
    <li>
      {logo ? (
        <img src={logo} alt={name} width="80" />
      ) : (
        <p>Sin escudo</p>
      )}
      <h2>{name}</h2>
      <button onClick={() => onToggleFavorito(id)}>
        {esFavorito ? 'Quitar favorito' : 'Agregar favorito'}
      </button>
    </li>
  )
}

export default ClubCard