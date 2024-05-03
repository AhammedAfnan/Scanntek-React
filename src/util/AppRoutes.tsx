import { Routes,Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
    return (
      <div>
        <Routes>
            <Route path={'/Login'} element={<LoginPage/>}/>
            <Route path={'/Dashboard'} element={<Dashboard/>}/>
        </Routes>
      </div>
    )
  }
  
  export default AppRoutes