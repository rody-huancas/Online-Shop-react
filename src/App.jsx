import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Páginas
import { Home, ProductDetails, Products, About, Contact, Error } from "./pages";
// Componentes
import { Sidebar, Header, Footer } from "./components";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
