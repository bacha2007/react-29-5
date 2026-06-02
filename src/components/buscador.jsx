function Buscador({ busqueda, setBusqueda }) {
  function handleChange(e) {
    setBusqueda(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar club..."
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  )
}

export default Buscador