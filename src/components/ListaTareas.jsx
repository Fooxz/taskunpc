import TareaCard from "./TareaCard";

function ListaTareas({ tareas, onToggle }) {
  return (
    <div>
      {tareas.map(tarea => (
        <TareaCard
          key={tarea.id}
          {...tarea}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default ListaTareas;
