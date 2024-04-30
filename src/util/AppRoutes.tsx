import { Routes,Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

const AppRoutes = () => {
    return (
      <div>
        <Routes>
        <Route path={'/Login'} element={<LoginPage/>}/>
        </Routes>
      </div>
    )
  }
  
  export default AppRoutes