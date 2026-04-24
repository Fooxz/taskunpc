import { useState } from "react";
import { tareasIniciales } from "./data/tareas";
import ListaTareas from "./components/ListaTareas";

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);

  function toggleTarea(id) {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  }

  return (
    <div>
      <h1>TaskUPC — Mi Gestor Académico</h1>
      <ListaTareas tareas={tareas} onToggle={toggleTarea} />
    </div>
  );
}

export default App;
