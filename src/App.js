import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ComMayin } from "./companet/mayin";
import { Projeck } from "./pages/projeck";
import { Stack } from "./pages/stack";
import Header from "./pages/header";

function App() {
  return (
    <>
    <div className="container">
    <Header/>
      <Routes>
        <Route path="/" element={<ComMayin />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/projeck" element={<Projeck />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
