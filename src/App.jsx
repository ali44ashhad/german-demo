import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes></div>
      <Footer />
    </>
  );
}

export default App;
