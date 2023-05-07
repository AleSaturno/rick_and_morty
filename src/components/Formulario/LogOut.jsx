

const LogOut = ({ onLogOut }) => {
  const handleLogOut = () => {
    // Aquí puedes realizar cualquier lógica adicional de cierre de sesión antes de llamar a la función `onLogOut`.
    onLogOut();
  };

  return (
    <div>
      <h1>Has cerrado sesión correctamente.</h1>
      <p>Vuelve a iniciar sesión para continuar.</p>
      <button onClick={handleLogOut}>Cerrar sesión</button>
    </div>
  );
};

export default LogOut;
