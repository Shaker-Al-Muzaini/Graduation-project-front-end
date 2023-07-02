import React, {useContext} from 'react'
import {BrowserRouter } from "react-router-dom";
import AppRouter from './Router/AppRouter';
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import {AuthContext, AuthProvider} from "./pages/AuthContext";



function App() {
    const authContext = useContext(AuthContext);
  return (
    <div>
    <BrowserRouter>
     <AppRouter/>
     </BrowserRouter>



  
     
    </div>
  );
}
function AppWithStore(){
    return (<AuthProvider>
        <App />
    </AuthProvider>);
}
export default AppWithStore;
