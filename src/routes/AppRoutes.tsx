import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppBackdrop from '../components/Appdrop/AppBackdrop';
import { paths } from './paths';
import Data from "../json/Data.json";

// import HeaderBar from '../components/Header/HeaderBar';


const HeaderBar = React.lazy(() => import('../components/Header/HeaderBar'));
const Machines = React.lazy(()=>import('../components/AttendanceMachines/Machines'))
const Logs = React.lazy(()=>import('../components/Logs/Logs'))
const Radio = React.lazy(()=>import('../components/Reports/RadioSelect'))


const data=Data.Data;
const AppRoutes = () => {
  return (
    <Suspense fallback={<AppBackdrop show />}>
      <Routes>
      <Route
          id="Dashboard"
          path={paths.DASHBOARD}
          element={
            <div>
            <HeaderBar 
            name="Dashboard" 
            subtitle=""
            />
            </div>

          }
        />

        <Route
          id="Attendance"
          path={paths.ATTENDANCE}
          element={
            <div>
           
            <HeaderBar 
            name="Attendance System"
            subtitle=""
            />
            <Machines MachinesInfo={data}/>
            </div>
          }
        />
        <Route
          id="test"
          path={paths.TEST}
          element={
            <div>
            
            <HeaderBar
            name="Test"
            subtitle=""
            />
           <Logs name="test" subtitle="hello" />
            </div>
          }
        />

          <Route
          id="reports"
          path={paths.ATTENDANCEREPORTS}
          element={
            <div>
              
            <HeaderBar 
            name="Attendance System > reports "
            subtitle=""
            />
            <Radio MachinesData={data}/>
            </div>
          }
        />

      </Routes>
      </Suspense>

  )
}

export default AppRoutes