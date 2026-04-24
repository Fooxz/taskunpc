import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NuevaTarea({ onAgregar }) {
  const [form, setForm] = useState({
    titulo: "",
    materia: "",
    fecha: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAgregar(form);
    navigate("/");
  }

  return (
    <div>
      <h2>Nueva Tarea</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={form.titulo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="materia"
          placeholder="Materia"
          value={form.materia}
          onChange={handleChange}
        />

        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default NuevaTarea;
