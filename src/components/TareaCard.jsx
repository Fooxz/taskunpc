function TareaCard({ id, titulo, materia, fecha, completada, onToggle, onEliminar }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{titulo}</h3>
      <p>{materia}</p>
      <p>{fecha}</p>

      <span>
        {completada ? "✅ Completada" : "⏳ Pendiente"}
      </span>

      <br />

      <button onClick={() => onToggle(id)}>
        Cambiar estado
      </button>

      <button onClick={() => onEliminar(id)}>
        Eliminar
      </button>
    </div>
  );
}

export default TareaCard;
