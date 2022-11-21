import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Color from "./components/Pages/Color";
import Fractal from "./components/Pages/Fractal";
import Help from "./components/Pages/Help";
import NotFound from "./components/Pages/NotFound";
import Transformation from "./components/Pages/Transformation";
import Welcome from './components/Pages/Welcome'

function App() {
  return (
    <div className={'overflow-y-auto h-full text-slate-50'}>
      <Routes>
        <Route path="/" element ={<Welcome/>}></Route>
        <Route element={<Layout/>}>
          <Route path="/color" element={<Color/>}/>
          <Route path="/transformation" element={<Transformation/>}/>
          <Route path="/fractal" element ={<Fractal/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
