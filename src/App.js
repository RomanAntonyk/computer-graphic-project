import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Color from "./components/Pages/Color";
import NotFound from "./components/Pages/NotFound";

function App() {
  return (
    <div className={'h-screen flex flex-col  bg-zinc-800 text-slate-50'}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/color" element={<Color/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
