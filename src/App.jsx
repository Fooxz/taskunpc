import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { tareasIniciales } from "./data/tareas";
import ListaTareas from "./components/ListaTareas";
import NuevaTarea from "./pages/NuevaTarea";
import FiltroBar from "./components/FiltroBar";

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState("todas");

  function toggleTarea(id) {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  }

  function agregarTarea(nuevaTarea) {
    setTareas([
      ...tareas,
      {
        ...nuevaTarea,
        id: Date.now(),
        completada: false
      }
    ]);
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter(t => t.id !== id));
  }

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/nueva">Nueva Tarea</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <FiltroBar filtro={filtro} setFiltro={setFiltro} />
              <ListaTareas tareas={tareasFiltradas} onToggle={toggleTarea} onEliminar={eliminarTarea} />
            </>
          }
        />
        <Route path="/nueva" element={<NuevaTarea onAgregar={agregarTarea} />} />
      </Routes>
    </div>
  );
}

export default App;
