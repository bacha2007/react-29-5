function Buscador({ busqueda, setBusqueda }) {
  // handler — actualizamos el estado con lo que escribe el usuario
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