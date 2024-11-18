import {Routes,Route} from 'react-router-dom'
import { DoctorDashBoard } from '../pages/doctor/DoctorDashBoard'
import { DoctorAllAppointments } from '../pages/doctor/DoctorAllAppointments'

export function DoctorRoutes(){
    return <Routes> <Route path='/ad_dash' element={<DoctorDashBoard/>}></Route>
    <Route path='/all-appointments' element={<DoctorAllAppointments/>}></Route></Routes>
}