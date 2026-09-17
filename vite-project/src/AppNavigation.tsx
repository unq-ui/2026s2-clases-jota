import { Link, useNavigate } from "react-router"

const App4 = () => {
  const navigate = useNavigate();

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
      <Link to="/AppExampleReact">Ejemplo de react y useState</Link>
      <Link to="/AppRenderList">Renderizar listas</Link>
      <Link to="/AppAxios">Hacer peticiones HTTP</Link>
      <Link to="/p_1234">Como leer params</Link>
      <button onClick={() => navigate("/p_1234?query=pepe")}>Como leer params y query params</button>
    </div>
  )
}

export default App4;
