import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppBackdrop from '../components/Appdrop/AppBackdrop';
import { paths } from './paths';
// import HeaderBar from '../components/Header/HeaderBar';

const Header = React.lazy(() => import('../components/Header/HeaderBar'));
const Machines = React.lazy(()=>import('../components/AttendanceMachines/Machines'))


const AppRoutes = () => {
  return (
    <Suspense fallback={<AppBackdrop show />}>
      <Routes>
      <Route
          id="Dashboard"
          path={paths.DASHBOARD}
          element={
            <Header 
            name="Dashboard" 
            />

          }
        />

        <Route
          id="Attendance"
          path={paths.ATTENDANCE}
          element={
            <div>
            <Header 
            name="Attendance System"
            />
            <Machines/>
            </div>
          }
        />

      </Routes>
      </Suspense>

  )
}

export default AppRoutes