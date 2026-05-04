import { Link } from "react-router-dom";

/**
 * Navbar komponent - peamise navigeerimenüü
 * Kuvab linkid kõigile peamistele lehtedele: Avaleht, Raamatud, Lemmikud
 */
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* Logo/kaubamärk */}
      <Link className="navbar-brand" to="/">
        📚 BookFinder
      </Link>

      {/* Navigeerimislingid */}
      <div className="navbar-nav">
        <Link className="nav-link" to="/">
          Avaleht
        </Link>
        <Link className="nav-link" to="/books">
          Raamatud
        </Link>
        <Link className="nav-link" to="/favorites">
          Lemmikud
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;