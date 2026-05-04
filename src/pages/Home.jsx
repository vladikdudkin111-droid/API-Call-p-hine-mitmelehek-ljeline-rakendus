import { Link } from "react-router-dom";

/**
 * Home komponent - BookFinder rakenduse sisseastumislehekülg
 * Kuvab tervitussõnumi ja nuppu raamatute otsimiseks
 */
function Home() {
  return (
    <div className="hero">
      <div>
        <h1>BookFinder</h1>
        <p>
          Otsi raamatuid, vaata detaile ja salvesta oma lemmikud ühte ilusasse
          mitmeleheküljelisse rakendusse.
        </p>

        <Link to="/books" className="btn btn-light btn-lg mt-3">
          Alusta otsimist
        </Link>
      </div>
    </div>
  );
}

export default Home;