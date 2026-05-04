import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Favorites from "./pages/Favorites";

/**
 * Peamine App komponent - marsruutija konfigureerimine
 * Määratleb kõik marsruudid ja kuvab Navbar + peamise sisuala
 */
function App() {
  return (
    <>
      {/* Navigeerimismenüü ülaosas */}
      <Navbar />

      {/* Peamise sisu ala marsruutidega */}
      <main className="container py-4">
        <Routes>
          {/* Avaleht - sisseastumis/tervituslehekülg */}
          <Route path="/" element={<Home />} />

          {/* Raamatute leht - raamatute otsing ja loetelu */}
          <Route path="/books" element={<Books />} />

          {/* Raamatu detailide leht - üksikjaamatu detailide kuvamine */}
          <Route path="/books/:id" element={<BookDetails />} />

          {/* Lemmikud lehekülg - localStorage-st salvestatud raamatute kuvamine */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;