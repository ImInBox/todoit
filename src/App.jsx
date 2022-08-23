import LoginPage from './pages/Login'
import SignUpPage from './pages/Signup'
import HomePage from './pages/Home'
import { useContext } from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

function App() {
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <RequireAuth> <HomePage /> </RequireAuth> } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
