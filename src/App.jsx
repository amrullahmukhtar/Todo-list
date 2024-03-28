import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;