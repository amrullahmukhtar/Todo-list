import "./App.css";
import { Routes, Route } from "react-router-dom";
// import HomePage from "./page/home"; 
import TodoList from "./page/home"; 

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route> */}
        <Route path="/" element={<TodoList />}></Route>
      </Routes>
    </>
  );
}

export default App;
