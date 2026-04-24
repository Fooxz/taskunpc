import TareaCard from "./TareaCard";

function ListaTareas({ tareas, onToggle, onEliminar }) {
  return (
    <div>
      {tareas.map(tarea => (
        <TareaCard
          key={tarea.id}
          {...tarea}
          onToggle={onToggle}
          onEliminar={onEliminar}
        />
      ))}
    </div>
  );
}

export default ListaTareas;
