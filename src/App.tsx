import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
// import { Router, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <Router>
        {/* <Routes> */}
        <AppRoutes />
        {/* </Routes> */}
      </Router>
      {/* <HeaderBar 
      
      name="Attendance System"
      /> */}
      {/* <ResponsiveDrawer/> */}
    </div>
  );
};

export default App;
