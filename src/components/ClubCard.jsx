// destructuring — sacamos lo que necesitamos de las props
function ClubCard({ club, esFavorito, onToggleFavorito }) {
  // destructuring — sacamos los datos del objeto club
  const { idTeam, strTeam, strBadge, strStadium, intFormedYear } = club

  return (
    <li>
      {/* render condicional — si tiene escudo lo mostramos */}
      {strBadge ? (
        <img src={strBadge} alt={strTeam} width="80" />
      ) : (
        <p>Sin escudo</p>
      )}

      <h2>{strTeam}</h2>

      {/* render condicional con && — solo si tiene estadio */}
      {strStadium && <p>Estadio: {strStadium}</p>}

      {/* ternario — si tiene año de fundación lo mostramos */}
      <p>{intFormedYear ? `Fundado en ${intFormedYear}` : 'Año desconocido'}</p>

      {/* evento handler — al hacer click toggleamos favorito */}
      <button onClick={() => onToggleFavorito(idTeam)}>
        {esFavorito ? '❤️ Quitar favorito' : '🤍 Agregar favorito'}
      </button>
    </li>
  )
}

export default ClubCard