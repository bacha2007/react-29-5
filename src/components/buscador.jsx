// componente que recibe props y tiene su propio handler
function Buscador({ busqueda, setBusqueda }) {
  function handleChange(e) {
    setBusqueda(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  )
}

export default Buscador