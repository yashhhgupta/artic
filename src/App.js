
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <h1>App</h1>
    </>
  );
}

export default App;
