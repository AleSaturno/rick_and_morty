import { useHistory } from 'react-router-dom';

const LogOut = ({ onLogOut }) => {
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.removeItem('token');

    document.cookie = 

    // Llamar a la función `onLogOut` para realizar acciones adicionales después del cierre de sesión.

    // Redirigir al formulario de inicio de sesión y eliminar el acceso al `/home`.
    history.push('/login');
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
