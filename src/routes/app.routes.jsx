import {Home} from '../pages/home/App';
import {LoginModal} from '../pages/home/authmodal'
import { Route, Routes } from "react-router-dom";
import { FrontEnd } from '../pages/cursos/frontend';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route path='/front-end' element={FrontEnd}/>
                <Route path="/Conta" element={<LoginModal />} />
            </Route>
        </Routes>
    )
}