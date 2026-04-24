function TareaCard({ titulo, materia, fecha, completada }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{titulo}</h3>
      <p>{materia}</p>
      <p>{fecha}</p>
      <span>
        {completada ? "✅ Completada" : "⏳ Pendiente"}
      </span>
    </div>
  );
}

export default TareaCard;
