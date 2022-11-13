import logo from './logo.svg';
import './App.css';

import { useSelector } from "react-redux";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const { isAuthenticated } = useSelector(state => state.auth)
  return (
    <>
    <Register />
    <Login />

    </>
  );
}

export default App;
