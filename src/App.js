import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ResponsiveAppBar from './components/Appbar';
import ResponsiveDrawer from './components/Sidebar';
import Divider from '@mui/material/Divider';
import Homepage from './components/Homepage';

import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: "#fafafa" }} className="App">
      <ResponsiveAppBar />
      <Divider sx={{ marginTop: '10px' }} />
      <ResponsiveDrawer />
      {/* <Homepage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
