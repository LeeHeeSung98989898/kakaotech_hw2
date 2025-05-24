import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import PokemonDetail from './pages/PokemonDetail';
// import { PokemonProvider } from './context/PokemonContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dex" element={<Dex />} />
      <Route path="/detail/:id" element={<PokemonDetail />} />
    </Routes><ToastContainer position="top-center" autoClose={2000} />
    </>
    // <PokemonProvider>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/dex" element={<Dex />} />
    //     <Route path="/detail/:id" element={<PokemonDetail />} />
    //   </Routes>
    //   <ToastContainer position="top-center" autoClose={2000} />
    // </PokemonProvider>
  );
}

export default App;
